import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {trigger, style, transition, animate, keyframes} from '@angular/animations';


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

export class TachometerComponent implements OnInit, OnChanges {
  @Input() clickCount;
  @Input() mc;
  @Input() ms;

  mSek = 0;

  state = 'zero';

  constructor() {}


  ngOnInit() {
    this.mc = 1;
    this.ms = 0;
  }

  ngOnChanges(changes: any) {
    if (changes.clickCount && this.mc === 1) {
      this.state = (this.state === 'zero' ? 'ten' : 'zero') ;
    } else if (changes.clickCount && this.mc === 2) {
      this.state = (this.state === 'zero' ? '20' : 'zero') ;
    }
  }

}
