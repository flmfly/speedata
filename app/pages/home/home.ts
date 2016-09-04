import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SelectPage} from '../select/select';
import {TradeCategoryPage} from '../trade-category/trade-category';
import {OemPage} from "../oem/oem";
import {CompanyPage} from "../company/company";
import {SdkPage} from "../sdk/sdk";
import {DataService} from "../../providers/data-service/data-service";
import {Global} from "../../providers/global/global";
import {Session} from "../../providers/session/session";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private pics: string[] = [];

  constructor(private nav: NavController,
              private dataService: DataService,
              private session: Session) {
    session.checkUser();
    dataService.read({
      func: "promotion",
      query: {},
      page: {num: -1, size: -1}
    }).subscribe(
      (data) => {
        let temp = data.data[0];

        if (temp.attachment && temp.attachment.length > 0) {
          temp.attachment.forEach(
            (el) => {
              this.pics.push(Global.picBaseUrl + el.url);
            }
          );
        } else {
          this.pics.push(Global.blankPic);
        }
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2SelectPage() {
    this.nav.parent.parent.push(SelectPage);
  }

  nav2TradeCategoryPage() {
    this.nav.parent.parent.push(TradeCategoryPage);
  }

  nav2OemPge() {
    this.nav.parent.parent.push(OemPage);
  }

  nav2CompanyPage() {
    this.nav.parent.parent.push(CompanyPage);
  }

  nav2SdkPage() {
    this.nav.parent.parent.push(SdkPage);
  }
}
