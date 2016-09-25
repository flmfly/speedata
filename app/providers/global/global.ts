import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the Global provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Global {

  public static devMode: boolean = false;
  public static rootUrl: string = "http://www.rzwy.com.cn/";
  // public static rootUrl: string = "http://127.0.0.1:18080/";
  public static picBaseUrl: string = Global.rootUrl + 'func/api/productcategory/file?fileName=&category=&path=';

  public static blankPic: string = Global.rootUrl + '/w/img/no-image.png';

  constructor(private http: Http) {
  }

  public static changeTitle(title: string) {
    var body = document.getElementsByTagName('body')[0];
    document.title = title;
    const mobile = navigator.userAgent.toLowerCase();
    const length = document.querySelectorAll('iframe').length;
    if (/iphone|ipad|ipod/.test(mobile) && !length) {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", Global.rootUrl + "dummy.html");
      iframe.addEventListener('load', function () {
        setTimeout(function () {
          iframe.removeEventListener('load', this, false);
          document.body.removeChild(iframe);
        }, 0);
      });
      document.body.appendChild(iframe);
    }
  }
}

