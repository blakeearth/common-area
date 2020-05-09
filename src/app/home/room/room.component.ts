import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EngineService } from '../engine/engine.service';

declare const initEngine: any;
declare const initRoom: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @ViewChild('rCanvas', {static: true})
  canvasRef: ElementRef<HTMLCanvasElement>;

  constructor(private readonly engineService: EngineService) { }

  // ...
  ngOnInit(): void { }
}
