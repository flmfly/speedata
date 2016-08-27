import {Component} from '@angular/core';
import {NavController, AlertController, Events, ModalController, ViewController} from 'ionic-angular';
import {Session} from "../../providers/session/session";
import {CustomInfoPage} from "../custom-info/custom-info";

/*
 Generated class for the EnquiryPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/enquiry/enquiry.html'
})
export class EnquiryPage {

  private sign: string = 'enquiryPage';

  constructor(private nav: NavController,
              private session: Session,
              private alertCtrl: AlertController,
              public events: Events,
              private modalCtrl: ModalController,
              private viewCtrl: ViewController) {

    events.subscribe(this.sign, () => {
      setTimeout(() => {
        this.alertCtrl.create({
          subTitle: '亲,我们将在30分钟内把结果发送到您的邮箱,请注意查收~',
          buttons: [
            'OK'
          ]
        }).present();
      }, 200);

    });
  }


  ionViewDidEnter() {

  }

  ionViewDidLeave() {
  }

  submitEnquiry() {
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
              // this.nav.parent.parent.push(CustomInfoPage, );
            }
          }
        ]
      }).present();


    }
  }
}
