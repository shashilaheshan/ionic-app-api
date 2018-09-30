import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {PromotionPage} from '../promotion/promotion';

import {RedditPage} from '../reddit/reddit';
import {SettingsPage} from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditPage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;
  tab4Root=PromotionPage;

  constructor() {

  }
}
