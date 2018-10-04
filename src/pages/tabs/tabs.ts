import { Component } from '@angular/core';


import {PromotionPage} from '../promotion/promotion';

import {RedditPage} from '../reddit/reddit';
import {SettingsPage} from '../settings/settings';
import {RegisterPage} from '../register/register';
import {ShowApiDatasPage} from "../show-api-datas/show-api-datas";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditPage;
 
  tab3Root = ShowApiDatasPage;
  tab4Root=PromotionPage;
  tab2Root=RegisterPage;
 // tab5Root=ShowApiDatasPage;

  constructor() {

  }
}
