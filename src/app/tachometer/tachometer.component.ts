import {Component, Input, OnInit, OnChanges} from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-tachometer',
  templateUrl: './tachometer.component.html',
  styleUrls: ['./tachometer.component.scss'],
})

export class TachometerComponent implements OnInit, OnChanges {
  @Input() clickCount;
  @Input() mc;
  @Input() ms;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: any) {

    if (changes.clickCount) {
      anime({
        targets: '.line',
        rotate: [
          {
            value: '-40',
            duration: 0,
            elasticity: 0
          },
          {
            value: '-=90',
            duration: 200,
            elasticity: 0
          }
        ]
      });
    }

    if (this.ms > 3) {
      anime({
        targets: '.line',
        rotate: ['-90', '120'],
      });
    }  else if (this.ms === 1) {
      anime({
        targets: '.line',
        rotate: ['-90'],
      });
    }
  }
}
