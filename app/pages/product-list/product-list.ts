import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProductDetailPage} from "../product-detail/product-detail";

/*
  Generated class for the ProductListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/product-list/product-list.html',
})
export class ProductListPage {

  constructor(private navCtrl: NavController) {

  }

  nav2ProductDetail() {
    this.navCtrl.push(ProductDetailPage);
  }
}
