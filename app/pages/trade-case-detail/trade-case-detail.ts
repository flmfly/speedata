import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
 Generated class for the TradeCaseDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/trade-case-detail/trade-case-detail.html',
})
export class TradeCaseDetailPage {

  private c: any;

  constructor(private navCtrl: NavController,
              private navParam: NavParams) {
    this.c = navParam.get("c");
  }

}
