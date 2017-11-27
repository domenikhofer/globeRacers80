import {Component, Input, OnInit, OnChanges} from '@angular/core';
import  anime from 'animejs';


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


  ngOnInit() {
    this.mc = 1;
    this.ms = 0;
  }

  ngOnChanges(changes: any) {
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

    if (changes.clickCount && this.mc === 1) {
      anime({
        targets: '.line',
        rotate: ['-90', '-120'],
      });
    } else if (changes.clickCount && this.mc >= 2) {
      anime({
        targets: '.line',
        rotate: ['-45', '-120'],
      });
    }
  }
}
