import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { OrderService } from 'src/app/experience/services/order.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tripForm: FormGroup;
  tagsList = [];

  constructor(
    private fb: FormBuilder,
    private orderSv: OrderService
  ) { }

  ngOnInit() {
    this.tagsList = this.orderSv.getTagsList();
    this.tripForm = this.fb.group({
      country: [''],
      county: [''],
      province: [''],
      category: [''],
      num_people: [null],
      free_search: [''],
      price_min: [null],
      price_max: [null]
    });
  }

  formSearch() {
    console.log('free search', this.tripForm.value);
  }

  searchByTag(id) {
    console.log('searching tag ...', id);
  }

}
