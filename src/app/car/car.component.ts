import { Component, Input, EventEmitter, OnInit, Output, OnChanges } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import anime from 'animejs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  animations: [
    trigger('carTrigger', [
      transition('void => *', [
        style({transform: 'translateY(-100%)' }),
        animate('1s')
      ])
    ])
  ]
})

export class CarComponent implements OnInit, OnChanges {
  @Input() distance;
  @Input() ms;
  @Output() carClicked: EventEmitter<any> = new EventEmitter();
  showCar = false;

  constructor() {}

  ngOnInit() {
    this.ms = 0;
  }

  togglesstates() {
    this.showCar = true;
  }

  ngOnChanges(changes: any) {
    if (this.ms > 0) {
      anime({
        targets: '.road-lines',
        translateX: ['0', '-20%'],
        easing: 'easeOutExpo',
      });
    }
  }

  onClick() {
    this.carClicked.emit();
   anime({
      targets: '.car',
      scale: ['1.05', '1.0'],
    });
   anime({
     targets: '.road-lines',
     translateX: ['0', '-20%'],
     easing: 'easeOutExpo',
   });

  }
}

