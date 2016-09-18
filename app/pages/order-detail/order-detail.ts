import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {OrderStatusPage} from "../order-status/order-status";
import {Order} from "../../model/order";
import {DataService} from "../../providers/data-service/data-service";
import {Global} from "../../providers/global/global";
import {ProductDetailPage} from "../product-detail/product-detail";

/*
 Generated class for the OrderDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/order-detail/order-detail.html',
})
export class OrderDetailPage {

  private order: any;

  constructor(private navCtrl: NavController,
              private navParam: NavParams,
              private dataService: DataService) {
    let query = {
      func: "order",
      query: {"id": {val: navParam.get('id')}},
      page: {num: -1, size: -1}
    };
    dataService.read(query).subscribe(
      (data) => {
        let el = data.data[0];

        let picUrl = el.product.attachment[0];
        if (!picUrl) {
          picUrl = Global.blankPic;
        } else {
          picUrl = Global.picBaseUrl + el.product.attachment[0].url;
        }

        el.product.picUrl = picUrl;
        this.order = el;
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2OrderStatus(id: number) {
    this.navCtrl.push(OrderStatusPage, {id: id});
  }

  nav2ProductDetail(){
    this.navCtrl.push(ProductDetailPage, {shown:true, pId: this.order.product.id})
  }
}
