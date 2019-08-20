import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  activity = {
    Id: 'WBIT234CT56',
    CoverImage: '',
    MasterCategory: '',
    Title: 'Lords of Chaos',
    Partner: 'WelfareBit',
    NumPart: 2,
    Duration: 4,
    Price: 20,
    descActivity: '',
    AdditionalNote: 'Wonderful film'
  };

  constructor() { }

  ngOnInit() {

  }

}
