import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {OemDetailPage} from "../oem-detail/oem-detail";

/*
 Generated class for the OemPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/oem/oem.html',
})
export class OemPage {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {

  }

  nav2OemDetailPage() {

    this.navCtrl.push(OemDetailPage);
  }
}
