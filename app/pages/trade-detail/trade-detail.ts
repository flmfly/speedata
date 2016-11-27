import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Trade} from "../../model/trade";
import {ProductListPage} from "../product-list/product-list";
import {TradeCasePage} from "../trade-case/trade-case";

/*
 Generated class for the TradeDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/trade-detail/trade-detail.html',
})
export class TradeDetailPage {

  private trade: Trade;

  private footerIsShown: boolean = true;

  constructor(private nav: NavController, private params: NavParams) {
    this.trade = this.params.get('trade');
  }

  onPageWillLeave() {
    this.footerIsShown = false;
  }

  onPageDidEnter() {
    this.footerIsShown = true;
  }

  nav2ProductList() {
    this.nav.push(ProductListPage, {tId: this.trade.id, trade: true});
  }

  nav2CaseList() {
    this.nav.push(TradeCasePage, {tId: this.trade.id});
  }
}
