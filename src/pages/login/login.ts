import { Component } from '@angular/core';

import { NavController , AlertController , LoadingController} from 'ionic-angular';
// import { FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbsstractControl } from 'angular2/common';
 
import { ApiService } from '../../app/services/api.service';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
//   directives: [FORM_DIRECTIVES]
})


export class LoginPage {

    // authForm: ControlGroup;
    // username: AbstractControl;
    // password: AbstractControl;

  resultAuth: any;
  loader: any;

  constructor(
      public navCtrl: NavController, 
      private apiService: ApiService,
      public alertCtrl: AlertController,
      public loadingCtrl: LoadingController
  ) {}

  doLogin(FormLogin)
  {
      let form = FormLogin.value;
      this.showLoading();
    //   console.log(form);
      this.apiService.doAuth(form.nis, form.password)
      .subscribe((data) => {
            if(data.code == '200')
            {
                localStorage.setItem('credentials', JSON.stringify(data));
                this.hideLoading();
                this.navCtrl.setRoot(TabsPage);
            }
            else{
                this.hideLoading();
                let alert = this.alertCtrl.create({
                    title : 'Loggin Failder',
                    subTitle : data.msg,
                    buttons : ['OK']
                });
                alert.present();
            }
            // console.log(data);
            // this.resultAuth = data;
      });

    //   console.log(this.resultAuth);
  }

  showLoading()
  {
    this.loader =  this.loadingCtrl.create({
      content : "Logging...."
    });

    this.loader.present();
  }

  hideLoading()
  {
      this.loader.dismiss();
  }


}
