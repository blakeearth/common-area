import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Location } from '@angular/common';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { WebMonetizationService } from 'src/app/web-monetization/web-monetization.service';
import { Activity } from '../activity';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent extends Handler implements OnInit, Activity {
  header: string = "Stats";

  webMonetizationService: WebMonetizationService;
  socketService: SocketService;
  tasksService: TasksService;

  barChart: Chart;

  sessions: any;

  tags: any[];

  listings: any[];
  millisecondsPerListing: Map<string, number>;
  minutesOnDeletedListings: number;

  fromDate: Date;
  toDate: Date;

  days: number;
  hours: number;
  minutes: number = 0;

  constructor(webMonetizationService: WebMonetizationService, socketService: SocketService, tasksService: TasksService) {
    super();
    this.webMonetizationService = webMonetizationService;
    this.socketService = socketService;
    this.tasksService = tasksService;
    this.tasksService.setOnListsDoneLoading(this.updateData.bind(this));
    this.millisecondsPerListing = new Map<string, number>();
  }

  ngOnInit(): void {
    this.webMonetizationService.monetization.subscribe((state: string) => {
      this.handleState(state);
    });

    this.fromDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    this.toDate = new Date(new Date().setFullYear(new Date().getFullYear()));

    (document.getElementById("from") as HTMLInputElement).value = this.fromDate.toLocaleDateString("fr-CA", {'year': 'numeric', 'month': 'numeric', 'day': 'numeric'});
    (document.getElementById("to") as HTMLInputElement).value = this.toDate.toLocaleDateString("fr-CA", {'year': 'numeric', 'month': 'numeric', 'day': 'numeric'});

    if (!this.socketService.channelIsRegistered("stats")) this.socketService.register("stats");
    this.socketService.channelReply.get("stats").subscribe(msg => {
      this[this.snakeToCamel(msg["type"])](msg);
    });
    
    this.socketService.sendMessage({channel: "stats", type: "request_sessions"});
    
    const ctx = (document.getElementById('task-breakdown-pie') as HTMLCanvasElement).getContext('2d');
    this.barChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      }
    });
  }

  onDatesChanged(): void {
    this.fromDate = new Date((document.getElementById("from") as HTMLInputElement).value);
    this.toDate = new Date((document.getElementById("to") as HTMLInputElement).value);
    this.updateData();
  }

  updateData(): void {
    let millisecondsInDuration: number = 0;
    console.log(this.sessions);
    this.tags = [];
    this.listings = [];
    this.millisecondsPerListing = new Map<string, number>();
    this.minutesOnDeletedListings = 0;
    for (let session in this.sessions) {
      for (let span of this.sessions[session].spans) {
        // check that span ended

        // DOES NOT ACCOUNT FOR TIME ZONES CORRECTLY YET!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let convertedStartTime: Date = new Date(span.start_time);
        convertedStartTime.setHours(convertedStartTime.getHours() - 5);

        let convertedEndTime: Date = new Date(span.end_time);
        convertedEndTime.setHours(convertedEndTime.getHours() - 5);
        if (convertedStartTime >= this.fromDate && convertedEndTime <= this.toDate && span.end_time != null) {
          let ms: number = ((new Date(span.end_time)).valueOf() - (new Date(span.start_time).valueOf()));
          millisecondsInDuration += ms;
          let listing: any = this.tasksService.getListing(span.listing_id);
          if (listing != null) {
            if (this.millisecondsPerListing.has(span.listing_id)) {
              this.millisecondsPerListing.set(span.listing_id, this.millisecondsPerListing.get(span.listing_id) + ms);
            }
            else {
              this.listings.push(listing);
              this.millisecondsPerListing.set(span.listing_id, ms);
            }
          }
          else {
            this.minutesOnDeletedListings += ms / 60000;
          }
        }
      }
    }

    let seconds: number = millisecondsInDuration / 1000;
    let days: number = Math.floor(seconds / (3600*24));
    seconds -= days*3600*24;
    let hours: number = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    let minutes: number = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;

    this.minutesOnDeletedListings = Math.floor(this.minutesOnDeletedListings);

    this.listings.sort(function(a: any, b: any){
      a.minutes = Math.floor(this.millisecondsPerListing.get(a.listing_id) / 60000);
      b.minutes = Math.floor(this.millisecondsPerListing.get(b.listing_id) / 60000);
      return this.millisecondsPerListing.get(b.listing_id) - this.millisecondsPerListing.get(a.listing_id);
    }.bind(this));

    this.barChart.data.labels = [];

    console.log(this.listings);
    console.log(this.millisecondsPerListing);

    this.barChart.destroy();
    const ctx = (document.getElementById('task-breakdown-pie') as HTMLCanvasElement).getContext('2d');

    let labels: string[] = [];
    let data: number[] = [];

    for (let listing of this.listings) {
      let title: string;
      if (listing.title.length > 25) title = listing.title.substr(0, 24) + "...";
      else title = listing.title;
      labels.push("Minutes spent on \"" + title + "\"");
      data.push(listing.minutes);
    }

    this.barChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Minutes',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
    });
  }

  requestSessions(msg: any): void {
    this.sessions = msg.sessions;
    this.updateData();
  }

  handleState(state: String) {
    let current: HTMLElement = (document.getElementsByClassName("current-state")[0] as HTMLElement);
    current.classList.remove("current-state");
    if (state == "pending") {
      let loading: HTMLElement = (document.getElementsByTagName("app-loading-monetization")[0] as HTMLElement);
      current = loading;
    }
    else if (state == "started") {
      let monetized: HTMLElement = (document.getElementsByTagName("app-monetized")[0] as HTMLElement);
      current = monetized;
    }
    else {
      // state is stopped or error state
      let notMonetized: HTMLElement = (document.getElementsByTagName("app-not-monetized")[0] as HTMLElement);
      current = notMonetized;
    }
    current.classList.add("current-state");
  }

}
