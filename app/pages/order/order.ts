import {Component} from '@angular/core';
import {NavController, ViewController, AlertController, Events, NavParams, ModalController} from 'ionic-angular';
import {Session} from "../../providers/session/session";
import {CustomInfoPage} from "../custom-info/custom-info";

/*
 Generated class for the OrderPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/order/order.html'
})
export class OrderPage {

  private sign: string = 'OrderPage';

  private session: Session;

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController,
              public events: Events,
              private navParams: NavParams,
              private modalCtrl: ModalController) {
    this.session = navParams.get('session');
    events.subscribe(this.sign, () => {
      setTimeout(() => {
        let alert = this.alertCtrl.create({
          subTitle: '订单提交成功',
          buttons: [{
            text: 'OK',
            handler: () => {

              setTimeout(() => {
                alert.dismiss();
                navCtrl.pop();
              }, 200);
            }
          }
          ]
        });
        alert.present();
      }, 200);

    });
  }

  submit() {
    if (this.session.requireCustomInfo()) {
      this.alertCtrl.create({
        subTitle: '提交前请您先完善您所在的公司信息',
        buttons: [
          {
            text: '取消',
            role: 'cancel'
          },
          {
            text: '去完善',
            handler: () => {
              this.modalCtrl.create(CustomInfoPage, {sign: this.sign, session: this.session}).present();
            }
          }
        ]
      }).present();
    }else{
      let alert = this.alertCtrl.create({
        subTitle: '订单提交成功',
        buttons: [{
          text: 'OK',
          handler: () => {

              alert.dismiss();
              this.navCtrl.pop();
          }
        }
        ]
      });
      alert.present();
    }
  }
}
