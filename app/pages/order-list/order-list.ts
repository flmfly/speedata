import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OrderDetailPage} from "../order-detail/order-detail";

/*
  Generated class for the OrderListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/order-list/order-list.html',
})
export class OrderListPage {

  constructor(private navCtrl: NavController) {

  }

  nav2OrderDetail(){
    this.navCtrl.push(OrderDetailPage);
  }
}
