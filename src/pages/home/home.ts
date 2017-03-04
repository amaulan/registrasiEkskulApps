import { Component } from '@angular/core';

import { App , NavController } from 'ionic-angular';

import { ApiService } from '../../app/services/api.service';

import { FormEkskulPage } from '../form-ekskul/form-ekskul';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  siswa_id: any;

  constructor( public navCtrl: NavController, private apiService: ApiService) {

  }

  ngOnInit() {
    this.getAllEkskul();
    this.getUserCredential();
  }

  actGoToFormPage(item, siswa_id)
  {
    let data = [item, siswa_id];
    // console.log(item);
    this.navCtrl.push(FormEkskulPage, {data : data});
  }

  getAllEkskul() {
    this.apiService.grabData().subscribe(response => {
        this.items = response.data;
    });
  }

  getUserCredential()
  {
    let cred = JSON.parse(localStorage.getItem('credentials'));

    // console.log(cred);
    this.siswa_id = cred.data.id;

  }

}
