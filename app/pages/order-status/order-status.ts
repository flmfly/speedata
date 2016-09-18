import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DataService} from "../../providers/data-service/data-service";

/*
 Generated class for the OrderStatusPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/order-status/order-status.html',
})
export class OrderStatusPage {

  private states: any[] = [];

  constructor(private navCtrl: NavController,
              private navParam: NavParams,
              private dataService: DataService) {
    let query = {
      func: "ordertrack",
      query: {"order.id": {val: navParam.get('id')}},
      page: {num: -1, size: -1, sort: '-recordTime'}
    };
    dataService.read(query).subscribe(
      (data) => {
        data.data.forEach((el) => {
          this.states.push({
            recordTime: el.recordTime,
            state: el.state
          });
        });
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

}
