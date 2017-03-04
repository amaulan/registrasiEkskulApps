import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ApiService } from './services/api.service';

import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { Welcome } from '../pages/welcome/welcome';
// import { EkskulKuPage } from '../pages/ekskul-ku/ekskul-ku';
// import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  providers: [ApiService]
})
export class MyApp {
  rootPage :any;
  loader: any;

  constructor(platform: Platform, public loadingCtrl: LoadingController, public storage: Storage) {
    // this.presentLoading();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
     
      let checkSession = localStorage.getItem('welcome');

      // console.log(checkSession);
      if(checkSession == null)
      {
        this.rootPage = Welcome;
        window.localStorage.setItem('welcome','1');
        // this.loader.dismiss();
      }
      else
      {
        // if(localStorage.getItem('credentials') == null)
        // {
        //   this.rootPage = LoginPage;
        // }
        // else{
          this.rootPage = TabsPage;
        // }
      }

      // this.storage.get('welcome').then((result) => {
      //   if(!result){
      //     this.rootPage = TabsPage;
      //   }else{
      //     this.rootPage = Welcome;
      //     this.storage.set('welcome', true).then((result) => {
      //       console.log(this.storage.get('welcome'));
      //     });
      //   }

      //   this.loader.dismiss();
      // })
    });
  }

  presentLoading()
  {
    this.loader =  this.loadingCtrl.create({
      content : "Welcomee...."
    });

//    this.loader.present();
  }
}
