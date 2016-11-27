import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ProductListPage} from "../product-list/product-list";
import {ProductCategory} from "../../model/product-category";
import {DataService} from "../../providers/data-service/data-service";

/*
 Generated class for the ProductCategoryPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/product-category/product-category.html',
})
export class ProductCategoryPage {

  private footerIsShown: boolean = true;

  private category: ProductCategory;

  constructor(private navCtrl: NavController,
              private navParam: NavParams,
              private dataService: DataService) {
    this.category = navParam.get("c");
    dataService.read({
      func: "productcategory",
      query: {"id": {val: this.category.id}},
      page: {num: -1, size: -1}
    }).subscribe(
      (data) => {
        this.category = data.data[0];
        console.log(this.category)
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2ProductList() {
    this.navCtrl.push(ProductListPage, {cId: this.category.id});
  }

  onPageDidEnter() {
    this.footerIsShown = true;
  }

  onPageWillLeave() {
    this.footerIsShown = false;
  }

  dismiss() {
    this.navCtrl.pop();
  }

}
