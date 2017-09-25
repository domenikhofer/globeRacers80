import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import  anime from 'animejs';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  animations: [
    trigger('roadmove', [
      transition('stop <=> move', animate('500ms linear', keyframes([
        style({transform: 'translate(0px, 0px)'}),
        style({transform: 'translate(-40%, 0px)'})
      ])))
    ]),
  ]
})

export class CarComponent implements OnInit {
@Output() carClicked: EventEmitter<any> = new EventEmitter();

  roadstate: string = 'stop';

  constructor() {}

  ngOnInit() {
  }

  onClick() {
   this.carClicked.emit();
   this.roadstate = (this.roadstate === 'stop' ? 'move' : 'stop') ;
   var carSize = anime({
      targets: '.car',
      scale: ['1.05', '1.0'],
    });
  }
}

