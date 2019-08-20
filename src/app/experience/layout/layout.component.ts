import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild('map', { static: false }) mapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
  }

}
