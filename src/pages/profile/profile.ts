import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiService } from '../../app/services/api.service';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  userBind: any;
  userEkskulBind: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private apiService: ApiService) {
      this.showUserHasLogin();
      this.getUserEkskul();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.getUserEkskul();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  showUserHasLogin()
  {
    let getUserFromStorage = localStorage.getItem('credentials');
    let parse = JSON.parse(getUserFromStorage);

    this.userBind = parse.data;

    console.log(this.userBind);
    // console.log('ionViewDidLoad ProfilePage');
  }

  getUserEkskul()
  {
    this.apiService.grabDataEndpoint("/siswa-ekskul").subscribe((data) => {
      this.userEkskulBind = data.data;
      console.log(data);
    })

    // console.log(this.userEkskulBind);
  }

}
