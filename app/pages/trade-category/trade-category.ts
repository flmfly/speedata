import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {TradeSubPage} from '../trade-sub/trade-sub';
import {DataService} from "../../providers/data-service/data-service";
import {Trade} from "../../model/trade";
import {Global} from "../../providers/global/global";

/*
 Generated class for the TradeCategoryPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/trade-category/trade-category.html'
})
export class TradeCategoryPage {

  onPageWillEnter() {
    //设置页面标题
    Global.changeTitle("行业应用");
  }

  private categories: Trade[] = [];

  constructor(private nav: NavController,
              private modalController: ModalController,
              private dataService: DataService) {
    let query = {func: "trade", query: {"parent.id": {isnullval: true}}, page: {num: -1, size: -1}};
    dataService.read(query).subscribe(
      (data) => {
        data.data.forEach((el) => {
          this.categories.push({name: el.name, id: el.id, content: ''});
        });
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2TradeSubPage(trade: Trade) {
    this.nav.push(TradeSubPage, {trade: trade});
  }

  back() {
    Global.changeTitle("思必拓微信商城");
    this.nav.pop();
  }
}


