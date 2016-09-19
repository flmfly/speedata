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

  public static rootUrl: string = "http://nas.iflmy.com:18080/";
  public static picBaseUrl: string = Global.rootUrl + 'func/api/productcategory/file?fileName=&category=&path=';

  public static blankPic: string = 'http://nas.iflmy.com:18080/w/img/no-image.png';

  constructor(private http: Http) {
  }

}

