import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {ProductDetailPage} from '../product-detail/product-detail';
import {ProductListPage} from "../product-list/product-list";
import {DataService} from "../../providers/data-service/data-service";
/*
 Generated class for the SelectPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/select/select.html'
})
export class SelectPage {

  private tags: any[] = [];

  private selected: any = {};

  constructor(private nav: NavController,
              private dataService: DataService,
              private alertCtrl: AlertController) {
    let query = {
      func: "producttag",
      query: {},
      page: {num: -1, size: -1, sort: 'category.sort,sort'}
    };
    dataService.read(query).subscribe(
      (data) => {
        let tag = {id: 0, name: '', icon: '', subs: []};
        data.data.forEach((el) => {
          if (el.category.name !== tag.name) {
            if (tag.name !== '') {
              this.tags.push(tag);
            }
            tag = {id: el.category.id, name: el.category.name, icon: el.category.icon, subs: []};
            // this.selected[el.category.id] = 0;
          }
          tag.subs.push({id: el.id, name: el.name});
        });
        this.tags.push(tag);
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );

  }

  nav2ProductList() {
    if (Object.getOwnPropertyNames(this.selected).length === 0) {
      this.alertCtrl.create({
        subTitle: '请至少选择一个特征！',
        buttons: ['OK']
      }).present();
    } else {
      this.nav.push(ProductListPage, {select: this.selected});
    }
  }

  cancel(id: any) {
    delete this.selected[id];
  }
}
