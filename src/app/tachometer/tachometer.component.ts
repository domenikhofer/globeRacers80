import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tachometer',
  templateUrl: './tachometer.component.html',
  styleUrls: ['./tachometer.component.css']
})
export class TachometerComponent implements OnInit {
  @Input() clickCount;
  mClick = 1;
  mSek = 0;

  constructor() { }

  ngOnInit() {
  }

}
