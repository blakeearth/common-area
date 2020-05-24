import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoomLink]'
})
export class RoomLinkDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
