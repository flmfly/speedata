import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Global} from "../global/global";

/*
 Generated class for the DataService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class DataService {

  private url: string = Global.rootUrl + 'ws/api/';

  constructor(private http: Http) {
  }

  public getOpenid(query: any): Observable<any> {
    return this.http
      .get(Global.rootUrl + 'shop/openid?code=' + query)
      .map(res => res.json());
    //
    // this.http
    //   .post(this.url, JSON.stringify(query), {headers: headers})
    //   .map(res => res.json())
    //   .subscribe(
    //     data => console.log(data),
    //     err => console.error(err),
    //     () => console.log('Authentication Complete')
    //   );
  }

  public select(query: any): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(Global.rootUrl + 'shop/select', JSON.stringify(query), {headers: headers})
      .map(res => res.json());
    //
    // this.http
    //   .post(this.url, JSON.stringify(query), {headers: headers})
    //   .map(res => res.json())
    //   .subscribe(
    //     data => console.log(data),
    //     err => console.error(err),
    //     () => console.log('Authentication Complete')
    //   );
  }

  public read(query: any): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.url + 'read', JSON.stringify(query), {headers: headers})
      .map(res => res.json());
    //
    // this.http
    //   .post(this.url, JSON.stringify(query), {headers: headers})
    //   .map(res => res.json())
    //   .subscribe(
    //     data => console.log(data),
    //     err => console.error(err),
    //     () => console.log('Authentication Complete')
    //   );
  }

  public write(postData: any): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.url + 'write', JSON.stringify(postData), {headers: headers})
      .map(res => res.json());
    //
    // this.http
    //   .post(this.url, JSON.stringify(query), {headers: headers})
    //   .map(res => res.json())
    //   .subscribe(
    //     data => console.log(data),
    //     err => console.error(err),
    //     () => console.log('Authentication Complete')
    //   );
  }

}

