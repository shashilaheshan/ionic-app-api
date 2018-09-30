import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedditPage } from './reddit';

@NgModule({
  declarations: [
    RedditPage,
  ],
  imports: [
    IonicPageModule.forChild(RedditPage),
  ],
})
export class RedditPageModule {}
