import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController , AlertController , ToastController } from 'ionic-angular';

import { ApiService } from '../../app/services/api.service';

/*
  Generated class for the EkskulKu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ekskul-ku',
  templateUrl: 'ekskul-ku.html'
})
export class EkskulKuPage {
  
  userEkskulBind: any;
  loader: any;
  userBind: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private apiService: ApiService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
      
  }

  ngOnInit()
  {
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

  unRegEkskul(ekskul_id)
  {
    this.showLoading()
    let userId = this.userBind.id;

    let body = {
      siswa_id : userId,
      ekskul_id : ekskul_id
    };

      let alert = this.alertCtrl.create({
        title: 'Confirm',
        message: 'Serously ?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
                this.hideLoading();
            }
          },
          {
            text: 'Ok',
            handler: () => {
              this.apiService.sendData('siswa-ekskul/unreg', body).subscribe((res) => {
                let alert = this.alertCtrl.create({
                    title : 'Success Deleting Data',
                    buttons : ['OK']
                });
                alert.present();
                this.getUserEkskul();
                this.hideLoading()
              });
            }
          }
        ]
      });
    alert.present();

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
    })

    console.log(this.userEkskulBind);
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
