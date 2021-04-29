import { Component, OnInit } from '@angular/core';
import { WebMonetizationService } from 'src/app/web-monetization/web-monetization.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, Activity {
  header: string = "Stats";

  webMonetizationService: WebMonetizationService;

  constructor(webMonetizationService: WebMonetizationService) {
    this.webMonetizationService = webMonetizationService;
  }

  ngOnInit(): void {
    this.webMonetizationService.monetization.subscribe((state: string) => {
      this.handleState(state);
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
