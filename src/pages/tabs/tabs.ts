import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
import { ProfilePage } from '../profile/profile';
import { EkskulKuPage } from '../ekskul-ku/ekskul-ku';

// import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = EkskulKuPage;
  tab3Root: any = ProfilePage;

  constructor(public navCtrl: NavController) {
    this.checkIfLogin();
  }

  checkIfLogin()
  {
      if(window.localStorage.getItem('credentials') == null)
      {
        this.navCtrl.setRoot(LoginPage);
      }
  }
}
