import { Component, OnInit } from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('loginform', [
      transition('void => *', [
        query('.loginform, h2, p, .loginRegistrationBtn ', [
          style({
            opacity: 0,
            transform: 'translateY(-10px)'
          }),
          stagger(250, [animate('0.5s 0.5s ease-in-out')])
        ])

      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
