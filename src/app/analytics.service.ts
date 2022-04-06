import { Injectable } from '@angular/core';

declare global {
  interface Window {
      fathom: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  trackEvent(eventId: string, value?: number) {
    if (value) {
      window.fathom.trackGoal(eventId, value);
    }
    else {
      window.fathom.trackGoal(eventId, 0);
    }
  }
}
