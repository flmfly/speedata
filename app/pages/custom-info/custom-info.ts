import {Component} from '@angular/core';
import {NavController, AlertController, Events, NavParams, ViewController} from 'ionic-angular';
import {Session} from "../../providers/session/session";

/*
 Generated class for the CustomInfoPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/custom-info/custom-info.html'
})
export class CustomInfoPage {

  private session: Session;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              public events: Events,
              private viewCtrl: ViewController) {
    this.session = navParams.get('session');
  }

  save() {
    this.alertCtrl.create({
      subTitle: '保存成功',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.session.fillCustomInfo = true;
          this.viewCtrl.dismiss();
          setTimeout(() => {
            this.events.publish(this.navParams.get('sign'));
          }, 200);

        }
      }]
    }).present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
