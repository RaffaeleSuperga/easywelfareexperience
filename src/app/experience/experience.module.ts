import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExperienceRoutingModule } from './experience-routing.module';

import { OrderService } from './services/order.service';
import { MapsService } from './services/maps.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarMobileComponent } from './header/navbar-mobile/navbar-mobile.component';
import { DetailsComponent } from './header/details/details.component';
import { MainComponent } from './main/main.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailComponent } from './detail/detail.component';
import { ModalDetailComponent } from './detail/modal-detail/modal-detail.component';


@NgModule({
  declarations: [
    HeaderComponent, FooterComponent, LayoutComponent,
    NavbarMobileComponent, DetailsComponent, MainComponent, CatalogComponent, DetailComponent, ModalDetailComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    OrderService, MapsService
  ]
})
export class ExperienceModule { }
