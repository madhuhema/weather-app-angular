import { Component, OnInit, Input } from '@angular/core';
import { Itemperature } from '../models/itemperature';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  @Input() tempInfo: Itemperature;
  constructor() { }

  ngOnInit() {
  }

}
