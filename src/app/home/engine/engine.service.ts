import { Injectable, ElementRef, NgZone } from '@angular/core';
import { Engine, Scene } from 'babylonjs';


@Injectable({
  providedIn: 'root'
})
export class EngineService {
  engine: Engine;

  constructor(private _ngZone: NgZone) {}

  // the Engine will render into the Canvas element
  start(canvas: ElementRef<HTMLCanvasElement>, scene: Scene) {
    this.engine = new Engine(canvas.nativeElement, true);

    // ... you can add content to the Scene

    // ignore the change events from the Engine in the Angular ngZone
    this._ngZone.runOutsideAngular( () => {
      // start the render loop and therefore start the Engine
      this.engine.runRenderLoop(() => scene.render())
    });
  }

}
