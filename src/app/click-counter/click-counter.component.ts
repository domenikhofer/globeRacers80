import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.scss']
})
export class ClickCounterComponent implements OnInit {
  @Input() clickCount: number;

  constructor() { }

  ngOnInit() {
    this.clickCount = 0;
  }

}
