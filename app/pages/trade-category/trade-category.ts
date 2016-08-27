import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {TradeSubPage} from '../trade-sub/trade-sub';
import {TradeService} from "../../providers/trade-service/trade-service";

/*
 Generated class for the TradeCategoryPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/trade-category/trade-category.html',
  providers: [TradeService]
})
export class TradeCategoryPage {

  private categories: string[] = [];

  constructor(private nav: NavController,
              private modalController: ModalController,
              private tradeService: TradeService) {
    this.categories.push('快递物流');
    this.categories.push('石油石化');
    this.categories.push('电力水利');
    this.categories.push('医药医疗');
    this.categories.push('零售图书');
    this.categories.push('移动执法');
    this.categories.push('金融行业');
    this.categories.push('票务管理');
    this.categories.push('物业管理');
    this.categories.push('停车管理');
    this.categories.push('地理信息');

    tradeService.fetchTrade().subscribe(
      data => console.log(data),
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2TradeSubPage(title: string) {
    this.nav.push(TradeSubPage, {title: title});
  }

  presentModal(title: string) {
    this.nav.push(TradeSubPage, {title: title});
  }
}
