import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Company} from "../../model/company";
import {DataService} from "../../providers/data-service/data-service";
import {CompanyDetailPage} from "../company-detail/company-detail";
import {Global} from "../../providers/global/global";

/*
 Generated class for the CompanyPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/company/company.html',
})
export class CompanyPage {

  onPageWillEnter() {
    //设置页面标题
    Global.changeTitle("公司风采");
  }

  private contents: Company[] = [];

  constructor(private navCtrl: NavController,
              private dataService: DataService) {
    let query = {func: "company", query: {"parent.id": {isnullval: true}}, page: {num: -1, size: -1}};
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

  nav2CompanyDetailPage(c: Company) {
    this.navCtrl.push(CompanyDetailPage, {c: c});
  }

  back() {
    Global.changeTitle("思必拓微信商城");
    this.navCtrl.pop();
  }
}
