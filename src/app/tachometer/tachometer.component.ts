import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, query, stagger} from '@angular/animations';


@Component({
  selector: 'app-tachometer',
  templateUrl: './tachometer.component.html',
  styleUrls: ['./tachometer.component.scss'],
  animations: [
    trigger('test', [
      transition('zero => ten', [
        animate(750, keyframes([
          style({transform: 'rotate(-90deg)', offset:0.5}),
          style({transform: 'rotate(-120deg)', offset:1}),
        ]))
      ]),
      transition('zero => 20', [
        animate(750, keyframes([
          style({transform: 'rotate(-45deg)', offset:0.5}),
          style({transform: 'rotate(-120deg)', offset:1}),
        ]))
      ])
    ])
  ]
})

export class TachometerComponent implements OnInit {
  @Input() clickCount;
  @Input() mpc;

  mSek = 0;

  state: string = 'zero';

  constructor() {}


  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.clickCount && this.mpc === 1) {
      this.state = (this.state === 'zero' ? 'ten' : 'zero') ;
    } else if (changes.clickCount && this.mpc === 2) {
      this.state = (this.state === 'zero' ? '20' : 'zero') ;
    }
  }

}
