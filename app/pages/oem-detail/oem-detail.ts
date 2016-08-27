import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/*
 Generated class for the OemDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/oem-detail/oem-detail.html',
})
export class OemDetailPage {

  constructor(private navCtrl: NavController, public viewCtrl: ViewController) {

  }

  dismiss() {
    this.navCtrl.pop();
  }
}
