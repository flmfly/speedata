import {Component} from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';
import {DataService} from "../../providers/data-service/data-service";

/*
 Generated class for the OemDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/oem-detail/oem-detail.html',
})
export class OemDetailPage {

  private footerIsShown: boolean = true;

  private oem: any = {content: ''};

  constructor(private navCtrl: NavController,
              public viewCtrl: ViewController,
              private dataService: DataService,
              private navParam: NavParams) {
    let query = {
      func: "oem",
      query: {id: {val: navParam.get("id")}},
      page: {num: -1, size: -1}
    };
    dataService.read(query).subscribe(
      (data) => {
        this.oem = data.data[0];
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  dismiss() {
    this.navCtrl.pop();
  }

  onPageDidEnter() {
    this.footerIsShown = true;
  }

  onPageWillLeave() {
    this.footerIsShown = false;
  }
}
