import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SibService} from '../../app/services/sib.service';
import { LoadingController } from 'ionic-angular';
import {RedditPage} from '../reddit/reddit';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  providers:[SibService],
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
f_name: String;
l_name: String;
address_no:String;
address_street: String;
address_city :String;
tp_no:String;
mobile:String;
email:String;
contacts:String;
gender:String;
  constructor(private alertCtrl: AlertController,public sibservice:SibService,public loadingCtrl:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Registration',
      message: 'Do you want to register with SIB?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            let load = this.loadingCtrl.create({
              content:'Registering..'
              
            });
            load.present();
            this.sibservice.RegisterUSer(this.f_name,this.l_name,this.gender,this.address_city,this.address_no,this.address_street,this.tp_no,this.mobile,this.email,this.contacts).subscribe(
              response=>{
                load.dismiss();
                this.navCtrl.push(RedditPage);
               
                console.log(response.response);
               }
            )
            
            
          }
        }
      ]
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
    Root(){
console.log("css");
        this.navCtrl.push(RedditPage);
    }
  SubmitRegistration(){ 
    this.presentConfirm();
   console.log(this.f_name);
   console.log(this.l_name);
   console.log(this.gender);
   console.log(this.address_city);
   console.log(this.address_no);
   console.log(this.address_street);
   console.log(this.tp_no);
   console.log(this.mobile);
   console.log(this.email);
   console.log(this.contacts);
   
 }
}
