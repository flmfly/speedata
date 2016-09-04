import {Component} from '@angular/core';
import {NavController, AlertController, Events, ModalController, ViewController} from 'ionic-angular';
import {Session} from "../../providers/session/session";
import {CustomInfoPage} from "../custom-info/custom-info";
import {DataService} from "../../providers/data-service/data-service";
import {Enquiry} from "../../model/enquiry";

/*
 Generated class for the EnquiryPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/enquiry/enquiry.html'
})
export class EnquiryPage {

  private enquiry: Enquiry = {
    id: 0,
    project: '',
    func: '',
    isCustom: false,
    email: '',
    user: this.session.user
  };

  private sign: string = 'enquiryPage';

  constructor(private nav: NavController,
              private session: Session,
              private alertCtrl: AlertController,
              public events: Events,
              private modalCtrl: ModalController,
              private dataService: DataService,
              private viewCtrl: ViewController) {

    events.subscribe(this.sign, this.saveEnquiry);
  }


  ionViewDidEnter() {

  }

  ionViewDidLeave() {
  }

  submitEnquiry() {

    if (this.validate()) {
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
      } else {
        this.events.publish(this.sign);
      }
    }
  }

  validate() {
    if (this.enquiry.id > 0) {
      this.alertCtrl.create({
        // title: 'New Friend!',
        subTitle: '请不要重复提交!',
        buttons: ['OK']
      }).present();
      return false;
    }

    if (this.enquiry.project.trim() === '' || this.enquiry.quantity <= 0 || this.enquiry.email.trim() === '') {
      this.alertCtrl.create({
        message: '邮箱必填<br>项目名称必填<br>需求数量必须大于0',
        buttons: [
          'OK'
        ]
      }).present();
      return false;
    }

    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!reg.test(this.enquiry.email)) {
      this.alertCtrl.create({
        // title: 'New Friend!',
        subTitle: '邮箱格式不正确!',
        buttons: ['OK']
      }).present();
      return false;
    }


    return true;
  }

  saveEnquiry() {
    this.dataService.write({
      func: "enquiry",
      operation: 2,
      data: [this.enquiry]
    }).subscribe(
      (data) => {
        this.enquiry.id = data.data[0].id;
        this.events.publish(this.sign);
        setTimeout(() => {
          this.alertCtrl.create({
            subTitle: '亲,我们将在30分钟内把结果发送到您的邮箱,请注意查收~',
            buttons: [
              'OK'
            ]
          }).present();
        }, 200);
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }
}
