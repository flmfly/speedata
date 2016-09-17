import {Component} from "@angular/core";
import {NavController, AlertController} from "ionic-angular";
import {ProfilePage} from "../profile/profile";
import {OrderListPage} from "../order-list/order-list";
import {Session} from "../../providers/session/session";
import {User} from "../../model/user";

/*
 Generated class for the PersonalPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/personal/personal.html',
})
export class PersonalPage {


  constructor(private nav: NavController,
              private alertCtrl: AlertController,
              private session: Session) {
  }

  nav2Profile() {
    this.nav.parent.parent.push(ProfilePage);
  }

  nav2PrototypeList() {
    this.nav.parent.parent.push(OrderListPage, {isPrototype: true});
  }

  nav2OrderList() {
    this.nav.parent.parent.push(OrderListPage, {isPrototype: false});
  }

  NIY() {
    this.alertCtrl.create({title: 'NIY', buttons: ['OK']}).present();
  }
}
