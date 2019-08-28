import { Injectable } from '@angular/core';
import { MarkerClusterer, ReadonlyMarkerOptions } from 'googlemaps';

import { OrderService } from 'src/app/experience/services/order.service';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  map = null;
  markers = [];

  constructor(
    private orderSvc: OrderService
  ) { }

  inizialize(map, domId, project, result) {
    let infowindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
    let mcOptions = { gridSize: 20, maxZoom: 17, imagePath: 'img/m' };
    let mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(40.2058,20.7531), 
      'mapTypeId': google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById(domId), mapOptions);
    // marker cluster

    let markers = [];
    let markerCluster = new MarkerClusterer(map, markers, mcOptions);

    for (let i = 0; i < result.length; i++) {
       let idAtt = result[i].Id;
       let newLat = result[i].Geo.Lat.toString().replace(',', '.');
       let newLong = result[i].Geo.Long.toString().replace(',', '.');

       let latLng = new google.maps.LatLng(newLat, newLong);
       markers.push(this.createMarkerInit(map, infowindow, markerCluster, bounds, latLng, idAtt, project));
    }
    map.fitBounds(bounds);

    let hideloading = 'hide-loading';

  }

  createMarkerInit(map, infowindow, markerCluster, bounds, latlng, idAtt, project) {
    let marker = new google.maps.Marker({
      // id: idAtt,
      position: latlng,
      map: map,
      icon: {
        url: 'img/swaggy.png',
        scaledSize: new google.maps.Size(32, 39)
      }
    });

    bounds.extend(marker['position']);

    let allMarkers = markerCluster.getMarkers();

    //check to see if any of the existing markers match the latlng of the new marker
    if (allMarkers.length !== 0) {

      for (let i=0; i < allMarkers.length; i++) {
        let existingMarker = allMarkers[i];
        let pos = existingMarker.getPosition();

        if (latlng.equals(pos)) {
          //  alert(pos)
          let idMarkerCluster = allMarkers[i].id;
          idAtt = idAtt + ',' + idMarkerCluster;
        }
      }
    }

    google.maps.event.addListener(marker, 'click', () => {
      // infowindow.close();
      let spl = idAtt.split(',');
      let content = '';
      for (let i = 0; i < spl.length; i++) {
        console.log('spl ' + spl[i]);

        let idAttDet = spl[i];
        let parametersDetail = {
          Id: idAttDet,
          ProjectCode: project
        };
        // serviceRicercaAttivita.getAttivitaDettaglio(parametersDettaglio, successCallBackDettaglioMap);
        // function successCallBackDettaglioMap(result) {
        // let urlDettaglio = $location.$$protocol + '://' + $location.$$host + '/dettaglio.php?id=' + result.Id;
        this.orderSvc.getActivity(parametersDetail)
          .subscribe(res => {
            content = content + '<a class="infowindow" [routerLink]="[\'/details\']"> [queryParams]="{ id: ' + res.Id + ' }" ' +
                    '<div class="infowindow-item">' +
                      '<div class="infowindow-image">' +
                      '<img src=' + res.CoverImage + '/>' +
                      '</div>' +
                      '<div class="infowindow-content">' +
                        '<span>' + res.Title + '</span>' +
                        '<span class="icon-master icon-' + res.MasterCategory + '><span class="span-text">' + res.Price + '</span></span>' +
                      '</div>' +
                    '</div>' +
                    '</a><br>';
            infowindow.setContent(content);
          });
      }

      infowindow.open(map.marker);
    });
    markerCluster.addMarker(marker);
    return marker;
  }


  getMap(cities, map) {

    let markers = [];
		
		let infoWindow = new google.maps.InfoWindow();
		
		let createMarker = function (info) {
			
			let marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(info.lat, info.long),
				title: info.city,
				icon: {
					url: "assets/img/swaggy.png",
					scaledSize: new google.maps.Size(32, 39)
				}
			});
			marker['content'] = '<div class="infoWindowContent">' + info.desc + '</div>';
			
			google.maps.event.addListener(marker, 'click', function(){
				infoWindow.setContent('<h3><a href="' + info.url + '">' + marker['title'] + '</a></h3>' + marker['content']);
				infoWindow.open(map, marker);
			});
			
			markers.push(marker);
			
			
		}  
		
		for (let i = 0; i < cities.length; i++){
			createMarker(cities[i]);
		}
		
		return markers;
  }

}
