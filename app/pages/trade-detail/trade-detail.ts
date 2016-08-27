import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
 Generated class for the TradeDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/trade-detail/trade-detail.html',
})
export class TradeDetailPage {

  private title: string;

  private footerIsShown: boolean = true;

  constructor(private nav: NavController, private params: NavParams) {
    this.title = this.params.get('title');
  }

  onPageWillLeave(){
    this.footerIsShown = false;
  }
}
