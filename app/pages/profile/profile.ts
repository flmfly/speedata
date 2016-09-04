import {Component, NgZone} from '@angular/core';
import {NavController, ModalController, Events} from 'ionic-angular';
import {CustomInfoPage} from "../custom-info/custom-info";
import {Session} from "../../providers/session/session";
import {User} from "../../model/user";

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

  private user: User;

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private session: Session,
              private events: Events,
              private zone: NgZone) {
    this.user = session.user;

    if (!this.user.company) {
      this.user.company = '';
    }
    if (!this.user.address) {
      this.user.address = '';
    }
    if (!this.user.license) {
      this.user.license = '';
    }
    if (!this.user.phone) {
      this.user.phone = '';
    }
    if (!this.user.title) {
      this.user.title = '';
    }
    if (!this.user.trade) {
      this.user.trade = {id: 0};
    }
    events.subscribe(this.sign, () => {
      zone.run(()=> {
        this.user = session.user;

        if (!this.user.company) {
          this.user.company = '';
        }
        if (!this.user.address) {
          this.user.address = '';
        }
        if (!this.user.license) {
          this.user.license = '';
        }
        if (!this.user.phone) {
          this.user.phone = '';
        }
        if (!this.user.title) {
          this.user.title = '';
        }
        if (!this.user.trade) {
          this.user.trade = {id: 0};
        }
      });
    });
  }

  nav2CustomInfo() {
    this.modalCtrl.create(CustomInfoPage, {sign: this.sign, session: this.session}).present();
  }

}
