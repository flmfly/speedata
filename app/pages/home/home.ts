import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SelectPage} from '../select/select';
import {TradeCategoryPage} from '../trade-category/trade-category';
import {OemPage} from "../oem/oem";
import {CompanyPage} from "../company/company";
import {SdkPage} from "../sdk/sdk";

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private nav: NavController) {

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
