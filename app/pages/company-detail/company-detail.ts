import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Company} from "../../model/company";

/*
 Generated class for the CompanyDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/company-detail/company-detail.html',
})
export class CompanyDetailPage {

  private c: Company;

  constructor(private navCtrl: NavController,
              public params: NavParams) {
    this.c = this.params.get('c');
  }

}
