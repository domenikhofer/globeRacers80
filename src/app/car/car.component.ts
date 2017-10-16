import {Component, Input, EventEmitter, OnInit, Output, OnChanges} from '@angular/core';
import  anime from 'animejs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})

export class CarComponent implements OnInit, OnChanges {
  @Input() distance;
  @Input() ms;
  @Output() carClicked: EventEmitter<any> = new EventEmitter();


  constructor() {}

  ngOnInit() {
    this.ms = 0;
  }

  ngOnChanges(changes: any) {
    if (this.ms > 0) {
      anime({
        targets: '.road-lines',
        translateX: ['0', '-40%'],
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
     translateX: ['0', '-40%'],
     easing: 'easeOutExpo',
   });

  }

}

