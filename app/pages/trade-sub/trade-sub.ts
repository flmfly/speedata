import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {TradeDetailPage} from '../trade-detail/trade-detail';
import {Trade} from "../../model/trade";
import {DataService} from "../../providers/data-service/data-service";

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

  private subs: Trade[] = [];

  constructor(private nav: NavController,
              public params: NavParams,
              public viewCtrl: ViewController,
              private dataService: DataService) {
    let trade: Trade = this.params.get('trade');
    this.title = trade.name;
    let query = {func: "trade", query: {"parent.id": {val: trade.id}}, page: {num: -1, size: -1}};
    dataService.read(query).subscribe(
      (data) => {
        data.data.forEach((el) => {
          this.subs.push({name: el.name, id: el.id, content: el.content || ''});
        });
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2TradeDetailPage(trade: Trade) {
    this.nav.push(TradeDetailPage, {trade: trade});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
