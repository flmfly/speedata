import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Faq} from "../../model/faq";

/*
 Generated class for the FaqDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/faq-detail/faq-detail.html',
})
export class FaqDetailPage {

  private c: Faq;

  constructor(private navCtrl: NavController,
              public params: NavParams) {
    this.c = this.params.get('c');
  }

}
