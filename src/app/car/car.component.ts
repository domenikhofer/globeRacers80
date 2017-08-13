import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserDataService} from '../user-data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
@Output() carClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
   this.carClicked.emit();
  }

}
