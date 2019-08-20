import { Component, OnInit } from '@angular/core';
import { CfgServiceService } from 'src/app/experience/services/cfg-service.service';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css']
})
export class NavbarMobileComponent implements OnInit {

  masterList = [];

  constructor(
    private cfgService: CfgServiceService
  ) { }

  ngOnInit() {
    this.masterList = this.cfgService.getMasterList('');
  }

  searchActivityByMaster(id, masterName) {

  }

}
