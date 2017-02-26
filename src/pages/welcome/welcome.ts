import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
 
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class Welcome {
 
  sliderOptions: any;
 
  constructor(public navCtrl: NavController) {
 
    this.sliderOptions = {
      pager: true
    };
 
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
 
  goToHome(){
    this.navCtrl.setRoot(TabsPage);
  }
 
}