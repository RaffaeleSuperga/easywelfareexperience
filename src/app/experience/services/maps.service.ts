import { Injectable } from '@angular/core';

import {} from 'googlemaps';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor() { }

  getMap(cities, map) {
    let markers = [];

    let infoWindow = new google.maps.InfoWindow();

    let createMarker = (info) => {

      let marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(info.lat, info.long),
        title: info.city,
        icon: {
          url: 'assets/img/swaggy.png',
          scaledSize: new google.maps.Size(32, 39)
        }
      });
      marker['content'] = '<div class="infoWindowContent">'+info.desc+'</div>';

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.setContent('<h3><a href="' + info.url + '">' + marker['title'] + '</a></h3>' + marker['content']);
        infoWindow.open(map, marker);
      });

      markers.push(marker);

    };

    for (let i = 0; i < cities.length; i++) {
      createMarker(cities[i]);
    }

    return markers;
  }

}
