import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ApiService } from '../../app/services/api.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;

  constructor(public navCtrl: NavController, private apiService: ApiService) {

  }

  ngOnInit() {
    this.getAllEkskul();
  }

  getAllEkskul() {
    this.apiService.grabData().subscribe(response => {
        this.items = response.data;
    });
  }


}
