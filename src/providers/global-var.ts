import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalVar provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalVar {

  myVar: any;

  constructor(public http: Http) {
    console.log('Hello GlobalVar Provider');
  }

  setVar(key, value) {
    // eval("this.myVar." + key + " = '" + value + "'");
    this.myVar[key] = value;
  }

  getVar(key) {
    return this.myVar[key];
  }


}
