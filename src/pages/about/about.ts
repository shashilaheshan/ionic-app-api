import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  myDate="";
  constructor(public navCtrl: NavController) {
  
  }

  Alert(){

    console.log(this.myDate);
  }

}
