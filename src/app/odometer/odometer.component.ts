import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odometer',
  templateUrl: './odometer.component.html',
  styleUrls: ['./odometer.component.scss']
})
export class OdometerComponent implements OnInit {
  @Input() distance;

  constructor() {}

  ngOnInit() {}

}
