import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.initialize();
  }

  initialize(): void {

  }

  trackEvent(eventDefinitionId: string) {

  }
}
