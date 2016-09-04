import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {OemDetailPage} from "../oem-detail/oem-detail";
import {DataService} from "../../providers/data-service/data-service";

/*
 Generated class for the OemPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/oem/oem.html',
})
export class OemPage {

  private oems: any[] = [];

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private dataService: DataService) {
    let query = {
      func: "oemview",
      query: {},
      page: {num: -1, size: -1}
    };
    dataService.read(query).subscribe(
      (data) => {
        data.data.forEach((el) => {
          this.oems.push({name: el.name, id: el.id});
        });
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  nav2OemDetailPage(id: number) {

    this.navCtrl.push(OemDetailPage, {id: id});
  }
}
