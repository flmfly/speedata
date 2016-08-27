import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

/*
 Generated class for the TradeService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class TradeService {

  private url: string = 'http://localhost:8080/s/ws/api/read';

  constructor(private http: Http) {
  }

  public fetchTrade(): Observable<any> {
    let query = {func: "trade", query: {"parent.id": {isnullval: true}}, page: {num: -1, size: -1}};
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(this.url, JSON.stringify(query), {headers: headers})
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

