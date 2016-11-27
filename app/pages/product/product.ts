import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProductListPage} from "../product-list/product-list";
import {DataService} from "../../providers/data-service/data-service";
import {ProductCategory} from "../../model/product-category";
import {Global} from "../../providers/global/global";
import {ProductCategoryPage} from "../product-category/product-category";

/*
 Generated class for the ProductPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/product/product.html',
})
export class ProductPage {
  private categories: ProductCategory[][] = [];

  onPageWillEnter() {
    //设置页面标题
    Global.changeTitle("产品展示");
  }

  constructor(private nav: NavController,
              private dataService: DataService) {
    let query = {func: "productcategory", query: {"isValid": {val: true}}, page: {num: -1, size: -1}};
    dataService.read(query).subscribe(
      (data) => {

        let list = data.data;
        let i = 0;
        for (; i < list.length;) {
          let tempArray: ProductCategory[] = [];

          let picUrl = Global.blankPic;
          if (list[i].attachment.length > 0) {
            picUrl = Global.picBaseUrl + list[i].attachment[0].url;
          }
          tempArray.push({
            name: list[i].name,
            id: list[i].id,
            picUrl: picUrl
          });
          i++;
          picUrl = Global.blankPic;
          if (list[i].attachment.length > 0) {
            picUrl = Global.picBaseUrl + list[i].attachment[0].url;
          }
          if (i < list.length) {
            tempArray.push({
              name: list[i].name,
              id: list[i].id,
              picUrl: picUrl
            });
            i++;
          }
          this.categories.push(tempArray);
        }

      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2ProductCategory(c: ProductCategory) {
    this.nav.parent.parent.push(ProductCategoryPage, {c: c});
  }
}
