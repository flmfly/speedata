import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {OrderDetailPage} from "../order-detail/order-detail";
import {DataService} from "../../providers/data-service/data-service";
import {Session} from "../../providers/session/session";
import {Order} from "../../model/order";
import {Global} from "../../providers/global/global";

/*
 Generated class for the OrderListPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/order-list/order-list.html',
})
export class OrderListPage {

  private isPrototype: boolean;

  private orders: any[] = [];

  constructor(private navCtrl: NavController,
              private navParam: NavParams,
              private dataService: DataService,
              private session: Session) {
    this.isPrototype = navParam.get('isPrototype');
    let query = {
      func: "order",
      query: {"user.id": {val: session.user.id}, isPrototype: {val: this.isPrototype}},
      page: {num: -1, size: -1}
    };
    dataService.read(query).subscribe(
      (data) => {
        data.data.forEach((el) => {
          let picUrl = el.product.attachment[0];
          if (!picUrl) {
            picUrl = Global.blankPic;
          } else {
            picUrl = Global.picBaseUrl + el.product.attachment[0].url;
          }
          this.orders.push({
            id: el.id,
            quantity: el.quantity,
            state: el.state,
            product: {name: el.product.name, picUrl: picUrl}
          });
        });
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );

  }

  nav2OrderDetail(id: number) {
    this.navCtrl.push(OrderDetailPage, {id: id});
  }
}
