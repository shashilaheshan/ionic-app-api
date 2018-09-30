import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {RedditService} from './services/reddit.service';
import {SibService} from './services/sib.service';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import {RedditPage} from '../pages/reddit/reddit';
import {SettingsPage} from '../pages/settings/settings';
import {PromotionPage} from '../pages/promotion/promotion';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    RedditPage,
    SettingsPage,
    PromotionPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    RedditPage,
    SettingsPage,
    TabsPage,
    PromotionPage
  ],
  providers: [
  
    RedditService,
     SibService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
