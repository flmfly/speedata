import {Component} from "@angular/core";
import {NavController, AlertController} from "ionic-angular";
import {ProfilePage} from "../profile/profile";
import {OrderListPage} from "../order-list/order-list";

/*
 Generated class for the PersonalPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/personal/personal.html',
})
export class PersonalPage {

  constructor(private nav: NavController, private alertCtrl: AlertController) {

  }

  nav2Profile() {
    this.nav.parent.parent.push(ProfilePage);
  }

  nav2PrototypeList() {
    this.nav.push(OrderListPage);
  }

  nav2OrderList() {
    this.nav.push(OrderListPage);
  }

  NIY() {
    this.alertCtrl.create({title: 'NIY', buttons: ['OK']}).present();
  }
}
