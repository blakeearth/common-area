import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signOut(): void {
    document.cookie = "token= ; expires=Wed, 09 Feb 2000 12:00:00 UTC";
    document.location.href = "/";
  }

}
