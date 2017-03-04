import { Component } from '@angular/core';
import { NavController, NavParams , AlertController , LoadingController, ToastController } from 'ionic-angular';

import { ApiService } from '../../app/services/api.service';

import { TabsPage } from '../tabs/tabs';
import { ProfilePage } from '../profile/profile';

/*
  Generated class for the FormEkskul page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form-ekskul',
  templateUrl: 'form-ekskul.html',
  providers: [ProfilePage]
})
export class FormEkskulPage {

  FormPendaftaran: any;
  // dataSiswa: any;

  loader: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private apiService: ApiService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public profilePage: ProfilePage
  ) {}

  ngOnInit()
  {
    let val = this.navParams.get('data');

    this.FormPendaftaran = {
      siswa_id  : val[1], 
      ekskul_id : val[0]
    } 
    // console.log(val[0]);
    console.log(this.FormPendaftaran);
  }

  doSubmit(params)
  {
    localStorage.setItem('e','1');
    let data = {
      siswa_id : this.FormPendaftaran.siswa_id,
      ekskul_id : this.FormPendaftaran.ekskul_id,
      alasan : params.value.alasan 
    };

    this.showLoading();

    this.apiService.sendData('siswa-ekskul/create',data).subscribe((result) => {
        console.log(result);
        if(result.code == '201')
        {
            this.hideLoading();
            this.navCtrl.setRoot(TabsPage);
                let toast = this.toastCtrl.create({
                message: 'Registration successfully',
                duration: 2000,
                position : 'top'
              });
              toast.present();
              console.log(this.profilePage.getUserEkskul())
        }
        else{
          this.hideLoading();
          let alert = this.alertCtrl.create({
              title : 'Registration Failed',
              subTitle : result.msg,
              buttons : ['OK']
          });
          alert.present();
      }
    })

    // data.siswa_id = this.FormPendaftaran
    // console.log(params.value);
    // console.log(this.FormPendaftaran);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormEkskulPage');
  }

}
