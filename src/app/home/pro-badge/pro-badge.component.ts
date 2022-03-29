import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pro-badge',
  templateUrl: './pro-badge.component.html',
  styleUrls: ['./pro-badge.component.css']
})
export class ProBadgeComponent implements OnInit {

  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
  }

  goToSubscription(event: Event): void {
    event.preventDefault();
    this.location.replaceState("/home/settings/subscribe");
  }

}
