import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-odometer',
  templateUrl: './odometer.component.html',
  styleUrls: ['./odometer.component.css']
})
export class OdometerComponent implements OnInit {
@Input() clickCount;

  constructor() {}

  ngOnInit() {
  }

}
