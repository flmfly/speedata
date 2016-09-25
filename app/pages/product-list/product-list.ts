import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProductDetailPage} from "../product-detail/product-detail";
import {DataService} from "../../providers/data-service/data-service";
import {Product} from "../../model/product";
import {Global} from "../../providers/global/global";

/*
 Generated class for the ProductListPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/product-list/product-list.html',
})
export class ProductListPage {

  private productList: Product[] = [];

  constructor(private navCtrl: NavController,
              private navParam: NavParams,
              private dataService: DataService) {

    let selected = navParam.get('select');
    if (selected) {
      dataService.select(selected).subscribe(
        (data) => {
          data.data.forEach((el) => {
            let picUrl = el.attachment[0];
            if (!picUrl) {
              picUrl = Global.blankPic;
            } else {
              picUrl = Global.picBaseUrl + el.attachment[0].url;
            }
            this.productList.push({name: el.name, id: el.id, picUrl: picUrl, remoteId: el.remoteId});
          });
        },
        err => console.error(err),
        () => console.log('Authentication Complete')
      );
    } else {
      let cId: number = navParam.get('cId');
      let query = {
        func: "productview",
        query: {"category.id": {val: cId}, isValid: {val: true}},
        page: {num: -1, size: -1}
      };
      dataService.read(query).subscribe(
        (data) => {
          data.data.forEach((el) => {
            let picUrl = el.attachment[0];
            if (!picUrl) {
              picUrl = Global.blankPic;
            } else {
              picUrl = Global.picBaseUrl + el.attachment[0].url;
            }
            this.productList.push({name: el.name, id: el.id, picUrl: picUrl, remoteId: el.remoteId});
          });
        },
        err => console.error(err),
        () => console.log('Authentication Complete')
      );
    }
  }

  nav2ProductDetail(pId: number) {
    this.navCtrl.push(ProductDetailPage, {pId: pId});
  }

  back() {
    this.navCtrl.pop();
  }
}
