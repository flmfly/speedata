import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {CustomInfoPage} from "../custom-info/custom-info";
import {Session} from "../../providers/session/session";

/*
 Generated class for the ProfilePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {

  private sign: string = 'ProfilePage';

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private session: Session) {

  }

  nav2CustomInfo() {
    this.modalCtrl.create(CustomInfoPage, {sign: this.sign, session: this.session}).present();
  }

}
