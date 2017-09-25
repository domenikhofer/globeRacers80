import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import  anime from 'animejs';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})

export class CarComponent implements OnInit {
@Output() carClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onClick() {
   this.carClicked.emit();
   anime({
      targets: '.car',
      scale: ['1.05', '1.0'],
    });
    anime({
      targets: '.road-lines',
      translateX: [ '0', '-40%'],
    });
  }
}

