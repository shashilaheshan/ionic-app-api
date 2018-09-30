import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the RedditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  providers:[RedditService],
  selector: 'page-reddit',
  templateUrl: 'reddit.html',
})
export class RedditPage {


  items:any;
  constructor(private redditService: RedditService,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    
  }

 ngOnInit(){

     this.getPosts('food',100);

 }
 getPosts(category,limit){
  let load = this.loadingCtrl.create({
    content:'Please Wait....'
    
  });
  load.present();
    this.redditService.getPosts(category,limit).subscribe(response=>{
      load.dismiss();
    this.items=response.data.children;
  console.log(response);
    });

  }

}
