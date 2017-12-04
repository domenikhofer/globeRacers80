import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-logo-animation',
  templateUrl: './logo-animation.component.html',
  styleUrls: ['./logo-animation.component.scss']
})
export class LogoAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    anime({
      targets: '.logo',
      opacity: [
        {value: 1, duration: 500}
      ],
      translateY: [
        {
          value: '-=160',
          duration: 1000,
          elasticity: 0
        },
        {
          value: '+=40',
          duration: 500,
          elasticity: 0
        }
      ],
      scaleY: [
        {value: 1.5, duration: 300},
        {value: 1, duration: 500},
      ],
      zIndex: [
        {value: 0, duration: 1000},
        {value: 2, duration: 1}
      ],
      scale: [
        {value: 0.5, duration: 300},
        {value: 1, duration: 500}
      ],
      easing: 'easeInOutQuart',
      duration: 5000,
      delay: 1500,
    });
  }

}
