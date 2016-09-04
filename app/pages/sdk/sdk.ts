import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Product} from "../../model/product";
import {DataService} from "../../providers/data-service/data-service";
import {Session} from "../../providers/session/session";


/*
 Generated class for the SdkPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/sdk/sdk.html',
})
export class SdkPage {

  private productId: number;

  private products: Product[] = [];

  private email: string;

  private sdkRequestId: number;

  constructor(private navCtrl: NavController,
              private dataService: DataService,
              private alertCtrl: AlertController,
              private session: Session) {

    let query = {
      func: "productview",
      query: {"isValid": {val: true}, "category.isValid": {val: true}},
      page: {num: -1, size: -1}
    };
    dataService.read(query).subscribe(
      (data) => {
        data.data.forEach((el) => {
          this.products.push({name: el.name, id: el.id});
        });
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );

  }

  submitRequest() {
    if (this.sdkRequestId) {
      this.alertCtrl.create({
        // title: 'New Friend!',
        subTitle: '请不要重复提交!',
        buttons: ['OK']
      }).present();
      return;
    }

    if (!this.productId) {
      this.alertCtrl.create({
        // title: 'New Friend!',
        subTitle: '请选择产品!',
        buttons: ['OK']
      }).present();
      return;
    }

    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!reg.test(this.email)) {
      this.alertCtrl.create({
        // title: 'New Friend!',
        subTitle: '邮箱格式不正确!',
        buttons: ['OK']
      }).present();
      return;
    }

    let data = {
      func: "sdkrequest",
      operation: 2,
      data: [{user: this.session.user, product: {id: this.productId}, email: this.email}]
    };

    this.dataService.write(data).subscribe(
      (data) => {
        this.sdkRequestId = data.data[0].id;
        this.alertCtrl.create({
          // title: 'New Friend!',
          subTitle: '请求提交成功,请注意查收邮件!',
          buttons: ['OK']
        }).present();
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  onPageWillLeave() {
    this.sdkRequestId = null;
  }
}
