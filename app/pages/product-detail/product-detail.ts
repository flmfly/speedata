import {Component} from '@angular/core';
import {NavController, ModalController, NavParams} from 'ionic-angular';
import {PrototypePage} from "../prototype/prototype";
import {OrderPage} from "../order/order";
import {Session} from "../../providers/session/session";
import {DataService} from "../../providers/data-service/data-service";
import {Product} from "../../model/product";
import {Global} from "../../providers/global/global";

/*
 Generated class for the ProductDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/product-detail/product-detail.html',
})
export class ProductDetailPage {

  private segmentIsShown: boolean = false;

  private footerIsShown: boolean = true;

  private product: Product = {id: 0, name: ''};

  private seg: string = 'content';

  constructor(private nav: NavController,
              private session: Session,
              private navParam: NavParams,
              private dataService: DataService) {
    dataService.read({
      func: "product",
      query: {"id": {val: navParam.get('pId')}},
      page: {num: -1, size: -1}
    }).subscribe(
      (data) => {
        let temp = data.data[0];


        let pics: string[] = [];
        if (temp.attachment && temp.attachment.length > 0) {
          temp.attachment.forEach(
            (el) => {
              pics.push(Global.picBaseUrl + el.url);
            }
          );
        } else {
          pics.push(Global.blankPic);
        }

        this.product = {
          id: temp.id,
          name: temp.name,
          pics: pics,
          content: temp.intro,
          spec: temp.spec
        };
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );

  }

  onPageDidEnter() {
    this.segmentIsShown = true;
    this.footerIsShown = true;
  }

  onPageWillLeave() {
    this.segmentIsShown = false;
    this.footerIsShown = false;
  }

  nav2Prototype() {
    this.nav.push(PrototypePage, {session: this.session, product: this.product});
  }

  nav2Order() {
    this.nav.push(OrderPage, {session: this.session, product: this.product});
  }
}
