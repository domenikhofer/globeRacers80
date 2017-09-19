import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, query, stagger} from '@angular/animations';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  animations: [
    trigger('carScale', [

     state('small', style ({
        transform: 'scale(1)',
     })),
     state('large', style ({
        transform: 'scale(1.1)',
        left: '60%',
     })),

      transition('small <=> large', animate('500ms ease-in'))
    ]),
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


  state: string = 'small';
  roadstate: string = 'stop';

  constructor() {}

  ngOnInit() {
  }

  onClick() {
   this.carClicked.emit();
   this.roadstate = (this.roadstate === 'stop' ? 'move' : 'stop') ;
  }

  makeLarge() {
    this.state = 'large';
  }

  makeSmall() {
    this.state = 'small';
  }



}

