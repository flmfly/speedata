import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {TradeDetailPage} from '../trade-detail/trade-detail';


/*
 Generated class for the TradeSubPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/trade-sub/trade-sub.html',
})
export class TradeSubPage {

  private title: string;

  private subs: string[] = [];

  constructor(private nav: NavController, public params: NavParams, public viewCtrl: ViewController) {
    this.title = this.params.get('title');

    this.subs.push('出入库管理');
    this.subs.push('资产盘点');
    this.subs.push('电子商务');
  }

  nav2TradeDetailPage(title: string){
    this.nav.push(TradeDetailPage, {title: title});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
