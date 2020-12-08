import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTaskPopup]'
})
export class TaskPopupDirective {

  public viewContainerRef: ViewContainerRef

  constructor(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef
  }

}
