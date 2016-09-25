import {Component} from '@angular/core';
import {NavController, AlertController, Events, NavParams, ViewController} from 'ionic-angular';
import {Session} from "../../providers/session/session";
import {User} from "../../model/user";
import {Trade} from "../../model/trade";
import {DataService} from "../../providers/data-service/data-service";
import {Global} from "../../providers/global/global";

/*
 Generated class for the CustomInfoPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/custom-info/custom-info.html',
  providers: [DataService]
})
export class CustomInfoPage {

  private session: Session;

  private tradeId: number;

  private categories: Trade[] = [];

  private user: User;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              public events: Events,
              private viewCtrl: ViewController,
              private dataService: DataService) {
    this.session = navParams.get('session');
    this.user = this.session.user;

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
    if (this.user.trade) {
      this.tradeId = this.user.trade.id;
    }

    let query = {func: "trade", query: {"parent.id": {isnullval: true}}, page: {num: -1, size: -1}};
    dataService.read(query).subscribe(
      (data) => {
        data.data.forEach((el) => {
          this.categories.push({name: el.name, id: el.id, content: ''});
        });
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  save() {
    this.categories.forEach((el) => {
      if (el.id == this.tradeId) {
        this.user.trade = el;
      }
    });
    if (this.validate()) {
      this.dataService.write({
        func: "wechartuser",
        operation: 4,
        data: [this.user]
      }).subscribe(
        (data) => {
          this.session.user = data.data[0];
          this.session.fillCustomInfo = true;
          this.alertCtrl.create({
            subTitle: '保存成功',
            buttons: [{
              text: 'OK',
              handler: () => {
                this.viewCtrl.dismiss();
                setTimeout(() => {
                  this.events.publish(this.navParams.get('sign'));
                }, 200);
              }
            }]
          }).present();
        },
        err => console.error(err),
        () => console.log('Authentication Complete')
      );
    }
  }

  validate(): boolean {
    if (this.user.company.trim() === ''
      || this.user.address.trim() === ''
      || this.user.license.trim() === ''
      || this.user.phone.trim() === ''
      || this.user.title.trim() === ''
      || !this.tradeId) {
      this.alertCtrl.create({
        // title: 'New Friend!',
        message: '所有项目都必须填写!',
        buttons: ['OK']
      }).present();
      return false;
    }
    return true;
  }

  dismiss() {
    this.events.publish('');
    this.viewCtrl.dismiss();
  }
}
