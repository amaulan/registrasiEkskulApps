import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService
{
    http :any;
    baseUrl :String;

    constructor(http:Http)
    {
        this.http = http;
        this.baseUrl = "http://localhost:8000/";
    }

    grabData()
    {
        let url = this.baseUrl + 'ekskul';

        return this.http.post(url).map(response => response.json());
    }

    doAuth(nis, password)
    {
        let url = this.baseUrl + 'auth';
        let data = {
            nis      : nis,
            password : password
        }

        return this.http.post(url, data).map(res => res.json());
    }
}