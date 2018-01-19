import {Component, Input, EventEmitter, OnInit, Output, OnChanges} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

import * as anime from 'animejs';

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
    if (0 < this.distance) {
      anime({
        targets: '.mountains',
        translateX: ['0', '-50%'],
        easing: 'easeOutExpo',
        duration: 600000,
        loop: true
      });
    }
  }

  ngOnChanges(changes: any) {
    if (this.ms > 0) {
      anime({
        targets: '.road-lines',
        translateX: ['0', '-20%'],
        easing: 'easeOutExpo',
      });
    }
    if (0 < this.distance  && this.distance < 2) {
      anime({
        targets: '.mountains',
        translateX: ['0', '-50%'],
        easing: 'easeOutExpo',
        duration: 600000,
        loop: true
      });
    }
    if (this.distance > 40000) {
      const field = document.getElementsByClassName('field') as HTMLCollectionOf<HTMLElement>;
      if (field.length !== 0) {
        field[0].style.background = 'linear-gradient(#808c5e, #576b3c)';
      }
      const mountains = document.getElementsByClassName('mountains') as HTMLCollectionOf<HTMLElement>;
      if (mountains.length !== 0) {
        mountains[0].style.background = 'linear-gradient(#CFDBC5, #5A6351)';
      }
      const mountainShadow = document.getElementsByClassName('mountain-shadow') as HTMLCollectionOf<HTMLElement>;
      if (mountainShadow.length !== 0) {
        mountainShadow[0].style.background = 'linear-gradient(#CFDBC5 0%, #5A6351 50%)';
      }
    }
    if (this.distance > 100000) {
      const field = document.getElementsByClassName('field') as HTMLCollectionOf<HTMLElement>;
       if (field.length !== 0) {
         field[0].style.background = 'linear-gradient(#FFDDA1, #F3B234)';
       }
      const mountains = document.getElementsByClassName('mountains') as HTMLCollectionOf<HTMLElement>;
      if (mountains.length !== 0) {
        mountains[0].style.background = 'linear-gradient(#F0F0C9, #E77728)';
      }
      const mountainShadow = document.getElementsByClassName('mountain-shadow') as HTMLCollectionOf<HTMLElement>;
      if (mountainShadow.length !== 0) {
        mountainShadow[0].style.background = 'linear-gradient(#F0F0C9 0%, #E77728 50%)';
      }
    }
    if (this.distance > 40000 && this.distance < 40500) {
      this.shown = true;
      const that = this;
      setTimeout(function() {
        that.shown = false;
      }, 10000);
    }
  }

  onClick() {
    this.carClicked.emit();
    this.playAudio();
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

  playAudio() {
    const audio = new Audio();
    audio.src = '../assets/audio/click.mp3';
    audio.load();
    audio.play();
  }
}

