import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {PrototypePage} from "../prototype/prototype";
import {OrderPage} from "../order/order";
import {Session} from "../../providers/session/session";

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

  constructor(private nav: NavController,
              private session: Session) {

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
    this.nav.push(PrototypePage, {session: this.session});
  }

  nav2Order() {
    this.nav.push(OrderPage, {session: this.session});
  }
}
