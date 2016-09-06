import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../../model/user";
import {DataService} from "../data-service/data-service";


/*
 Generated class for the Session provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Session {

  public fillCustomInfo: boolean = false;

  public user: User;

  constructor(private http: Http,
              private dataService: DataService) {

  }

  saveUser() {
    let data = {
      func: "wechartuser",
      operation: 2,
      data: [{account: this.getUserAccount()}]
    };
    this.dataService.write(data).subscribe(
      (data) => {
        this.user = data.data[0];
      },
      err => console.error(err),
      () => console.log('Authentication Complete')
    );
  }

  public requireCustomInfo() {
    return !this.fillCustomInfo;
  }

  public checkUser() {
    this.dataService.read({
      func: "wechartuser",
      query: {account: this.getUserAccount()},
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
  }

  private getUserAccount(): string {

    return '13717756822';
  }
}

