import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OrderStatusPage} from "../order-status/order-status";

/*
  Generated class for the OrderDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/order-detail/order-detail.html',
})
export class OrderDetailPage {

  constructor(private navCtrl: NavController) {

  }

  nav2OrderStatus(){
    this.navCtrl.push(OrderStatusPage);
  }
}
