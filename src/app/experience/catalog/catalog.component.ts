import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showCatalog() {
    // Query selection on MAP
    /* var mappa = angular.element( document.querySelector( '#map-container' ) );
				var catalogo = angular.element( document.querySelector( '.catalogo-next-container' ) );
				var linkMappa = angular.element( document.querySelector( '.link-globe' ) );
				var linkCatalogo = angular.element( document.querySelector( '.link-grid' ) );

				if(view=="Catalogo"){

					catalogo.addClass('display-block');
					catalogo.removeClass('display-none');
					mappa.addClass('display-none');
					mappa.removeClass('display-block');

					linkMappa.removeClass('active');
					linkCatalogo.addClass('active');

				}else{
					mappa.addClass('display-block');
					mappa.removeClass('display-none');
					catalogo.addClass('display-none');
					catalogo.removeClass('display-block');
					
					linkMappa.addClass('active');
					linkCatalogo.removeClass('active');
				} */
  }

}
