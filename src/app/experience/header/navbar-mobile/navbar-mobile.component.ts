import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/experience/services/order.service';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css']
})
export class NavbarMobileComponent implements OnInit {

  masterList = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.masterList = this.orderService.getMasterList('');
  }

  searchActivityByMaster(id, masterName) {

  }

}
