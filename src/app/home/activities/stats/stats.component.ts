import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Handler } from 'src/app/handler';
import { SocketService } from 'src/app/socket/socket.service';
import { WebMonetizationService } from 'src/app/web-monetization/web-monetization.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent extends Handler implements OnInit, Activity {
  header: string = "Stats";

  webMonetizationService: WebMonetizationService;
  socketService: SocketService;

  barChart: Chart;

  constructor(webMonetizationService: WebMonetizationService, socketService: SocketService) {
    super();
    this.webMonetizationService = webMonetizationService;
    this.socketService = socketService;
  }

  ngOnInit(): void {
    this.webMonetizationService.monetization.subscribe((state: string) => {
      this.handleState(state);
    });

    if (!this.socketService.channelIsRegistered("stats")) this.socketService.register("stats");
    this.socketService.channelReply.get("stats").subscribe(msg => {
      this[this.snakeToCamel(msg["type"])](msg);
    });
    this.socketService.sendMessage({channel: "stats", type: "request_sessions"});

    const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
    this.barChart = new Chart(ctx, {
      type: 'bar',
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
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

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
