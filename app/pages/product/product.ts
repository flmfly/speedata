import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProductListPage} from "../product-list/product-list";

/*
 Generated class for the ProductPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/product/product.html',
})
export class ProductPage {

  constructor(private nav:NavController) {

  }

  nav2ProductList() {
    this.nav.parent.parent.push(ProductListPage);
  }
}
