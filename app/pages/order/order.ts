import {Component} from '@angular/core';
import {NavController, ViewController, AlertController, Events, NavParams, ModalController} from 'ionic-angular';
import {Session} from "../../providers/session/session";
import {CustomInfoPage} from "../custom-info/custom-info";
import {Order} from "../../model/order";
import {DataService} from "../../providers/data-service/data-service";

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

  private submitInprogress: boolean = false;

  private order: Order = {
    product: {id: 0, name: ''},
    quantity: 1,
    receiver: '',
    receiverPhone: '',
    address: '',
    remark: '',
    isPrototype: false
  };

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private alertCtrl: AlertController,
              public events: Events,
              private navParams: NavParams,
              private modalCtrl: ModalController,
              private dataService: DataService) {
    this.session = navParams.get('session');
    this.order.user = this.session.user;
    this.order.product.id = navParams.get('product').id;
    this.order.product.remoteId = navParams.get('product').remoteId;
    this.order.product.name = navParams.get('product').name;

    events.unsubscribe(this.sign, () => {
    });
    events.subscribe(this.sign, () => {
      setTimeout(() => {
        this.dataService.write({
          func: "order",
          operation: 2,
          data: [this.order]
        }).subscribe(
          (data) => {
            let alert = this.alertCtrl.create({
              subTitle: '订单提交成功,请到我的页面订单列表中查看！',
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
          },
          err => console.error(err),
          () => this.submitInprogress = false
        );
      }, 200);

    });
  }

  validate(): boolean {
    if (this.order.receiver.trim() === ''
      || this.order.receiverPhone.trim() === ''
      || this.order.address.trim() === '') {
      this.alertCtrl.create({
        // title: 'New Friend!',
        message: '星号标记的都为必填项!',
        buttons: ['OK']
      }).present();
      return false;
    }
    return true;
  }

  submit() {
    if (this.submitInprogress) {
      return;
    }
    this.submitInprogress = true;
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
                // this.modalCtrl.create(CustomInfoPage, {sign: this.sign, session: this.session}).present();
                this.navCtrl.push(CustomInfoPage, {sign: this.sign, session: this.session});
              }
            }
          ]
        }).present();
      } else {
        this.dataService.write({
          func: "order",
          operation: 2,
          data: [this.order]
        }).subscribe(
          (data) => {
            let alert = this.alertCtrl.create({
              subTitle: '订单提交成功,请到我的页面订单列表中查看！',
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
          },
          err => console.error(err),
          () => this.submitInprogress = false
        );
      }
    }
  }
}
