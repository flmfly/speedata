import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DataService} from "../../providers/data-service/data-service";
import {TradeCaseDetailPage} from "../trade-case-detail/trade-case-detail";

/*
 Generated class for the TradeCasePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/trade-case/trade-case.html',
})
export class TradeCasePage {

  private cases: any[] = [];

  constructor(private navCtrl: NavController,
              private navParam: NavParams,
              private dataService: DataService) {
    dataService.tradecase({
      id: navParam.get('tId')
    }).subscribe(
      (data) => {
        this.cases = data.data;
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2CaseDetail(c: any) {
    this.navCtrl.push(TradeCaseDetailPage, {c: c});
  }
}
