import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../../model/user";
import {DataService} from "../data-service/data-service";
import {Global} from "../global/global";


/*
 Generated class for the Session provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Session {

  public fillCustomInfo: boolean = false;

  public user: User;

  public account: string;

  constructor(private http: Http,
              private dataService: DataService) {

    if (Global.devMode) {
      this.account = '13717756822';
    }
  }

  saveUser() {
    let data = {
      func: "wechartuser",
      operation: 2,
      data: [{account: this.account}]
    };
    this.dataService.write(data).subscribe(
      (data) => {
        this.user = data.data[0];
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  public init() {
    if (!Global.devMode)
      this.dataService.getOpenid(this.getCode()).subscribe(
        (data) => {
          this.account = data.data;
          this.checkUser();
        },
        err => console.error(err),
        () => console.log('Authentication Complete')
      );
    else
      this.checkUser();
  }

  public requireCustomInfo() {
    return !this.fillCustomInfo;
  }

  public checkUser() {
    if (this.account)
      this.dataService.read({
        func: "wechartuser",
        query: {account: this.account},
        page: {num: -1, size: -1}
      }).subscribe(
        (data) => {
          if (data.data.length > 0) {
            this.user = data.data[0];
            this.fillCustomInfo = this.user.company && this.user.company.trim() !== '';
          } else {
            this.saveUser();
          }
        },
        err => console.error(err),
        () => console.log('Authentication Complete')
      );
    else
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe69165b84dbcd5b6&redirect_uri=http%3A%2F%2Fwww.rzwy.com.cn%2Fw%2Findex.html&response_type=code&scope=snsapi_base&state=123#wechat_redirect';
  }

  private getCode(): string {
    var tmp = window.location.search;

    if (tmp.indexOf('code=') != -1) {
      return tmp.substr(tmp.indexOf('code=') + 'code='.length, 32)
    }
    return '13717756822';
  }
}

