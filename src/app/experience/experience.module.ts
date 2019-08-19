import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarMobileComponent } from './header/navbar-mobile/navbar-mobile.component';
import { DetailsComponent } from './header/details/details.component';


@NgModule({
  declarations: [HeaderComponent, BodyComponent, FooterComponent, LayoutComponent, NavbarMobileComponent, DetailsComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }
