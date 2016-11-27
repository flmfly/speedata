import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {ProductPage} from '../product/product';
import {EnquiryPage} from '../enquiry/enquiry';
import {PersonalPage} from "../personal/personal";
declare class wx {
  static closeWindow(): any;

}
@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private homeRoot: any;
  private tab2Root: any;
  private personalRoot: any;
  private productRoot: any;
  private enquiryRoot: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.homeRoot = HomePage;
    this.tab2Root = AboutPage;

    this.personalRoot = PersonalPage;
    this.productRoot = ProductPage;
    this.enquiryRoot = EnquiryPage;
  }

  close(){
    wx.closeWindow();
  }
}
