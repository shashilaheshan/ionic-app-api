import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SibService} from '../../app/services/sib.service';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
providers:[SibService],
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {
promotion:any;
  constructor(public sibService: SibService,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionPage');
  }
  ngOnInit(){
    this.getPromoton();

  }
 
  getPromoton(){
   
     this.sibService.getPromotions().subscribe(
      response=>{
       
       this.promotion=response.promotions;
      
       console.log(response);
      }
     )

  }

}