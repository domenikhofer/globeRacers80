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
        animate('1s cubic-bezier(.12,.67,.95,.62)')
      ])
    ])
  ]
})

export class CarComponent implements OnInit, OnChanges {
  @Input() distance;
  @Input() ms;
  @Output() carClicked: EventEmitter<any> = new EventEmitter();
  shown = false;

  constructor() {}

  ngOnInit() {
    this.ms = 0;
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

   if (this.distance > 40000 && this.distance < 40500 ) {
     this.shown = true;
     const that = this;
     setTimeout(function() {
       that.shown = false;
     }, 10000);
   }
    this.playAudio();
  }

  playAudio() {
    const audio = new Audio();
    audio.src = '../assets/audio/click.mp3';
    audio.load();
    audio.play();
  }

}

