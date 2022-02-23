import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-update-notes-popup',
  templateUrl: './update-notes-popup.component.html',
  styleUrls: ['./update-notes-popup.component.css']
})
export class UpdateNotesPopupComponent implements OnInit {
  
  sanitizer: DomSanitizer;
  data: string[];
  onClose: Function;

  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {
    let modalContent: HTMLElement = document.getElementsByClassName("modal-content")[0] as HTMLElement;

    modalContent.focus();
  }
}
