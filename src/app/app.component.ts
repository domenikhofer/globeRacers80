import { Component, OnInit } from '@angular/core';

import anime from 'animejs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    anime({
      targets: '.logo',
      rotate: '1turn',
      duration: 5000,
      delay: 1000,
    });
  }
}
