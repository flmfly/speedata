import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProductDetailPage} from '../product-detail/product-detail';
import {ProductListPage} from "../product-list/product-list";
/*
 Generated class for the SelectPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/select/select.html'
})
export class SelectPage {

  constructor(private nav: NavController) {


  }

  nav2ProductDetail() {
    this.nav.push(ProductDetailPage);
  }

  nav2ProductList() {
    this.nav.push(ProductListPage);
  }

}
