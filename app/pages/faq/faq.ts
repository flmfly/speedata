import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Faq} from "../../model/faq";
import {Global} from "../../providers/global/global";
import {FaqDetailPage} from "../faq-detail/faq-detail";
import {DataService} from "../../providers/data-service/data-service";

/*
  Generated class for the FaqPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/faq/faq.html',
})
export class FaqPage {
  onPageWillEnter() {
    //设置页面标题
    Global.changeTitle("常见问题");
  }
  private contents: Faq[] = [];
  constructor(private navCtrl: NavController,
              private dataService: DataService) {
    let query = {func: "faq", query: {"parent.id": {isnullval: true}}, page: {num: -1, size: -1}};
    dataService.read(query).subscribe(
      (data) => {
        data.data.forEach((el) => {
          this.contents.push({name: el.name, id: el.id, content: el.content || ''});
        });
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2FaqDetailPage(c: Faq) {
    this.navCtrl.push(FaqDetailPage, {c: c});
  }

  back() {
    Global.changeTitle("思必拓微信商城");
    this.navCtrl.pop();
  }

}
