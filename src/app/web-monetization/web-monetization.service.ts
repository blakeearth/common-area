import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface monetizedDocument extends Document {monetization: any}

@Injectable({
  providedIn: 'root'
})
export class WebMonetizationService {
  monetizationSource: Subject<string>;
  public monetization: Observable<string>;
  document: monetizedDocument;

  constructor(@Inject(DOCUMENT) document: Document) {
    this.document = <monetizedDocument> document;
    this.monetizationSource = new Subject<string>();
    this.monetization = this.monetizationSource.asObservable();
    if (this.webMonetizationExists()) {
      this.document.monetization.addEventListener('monetizationpending', (paymentPointer: string, requestId: string) => this.monetizationSource.next("pending"));
      this.document.monetization.addEventListener('monetizationstart', (paymentPointer: string, requestId: string) => this.monetizationSource.next("started"));
      this.document.monetization.addEventListener('monetizationstop', (paymentPointer: string, requestId: string) => this.monetizationSource.next("stopped"));
    }
  }

  public webMonetizationExists(): boolean {
    return !!this.document && !!this.document.monetization;
  }
}
