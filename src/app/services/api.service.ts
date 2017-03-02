import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService
{
    http :any;
    baseUrl :String;

    constructor(http:Http)
    {
        this.http = http;
        this.baseUrl = "http://192.168.43.55:8000/";
    }

    grabDataEndpoint(endpoint:String)
    {
        let _localStorage = localStorage.getItem('credentials');
        let _parseStorage = JSON.parse(_localStorage);

        let url = this.baseUrl + '' + endpoint;

        let header = new Headers;
        header.append('token',_parseStorage.data.token);

        return this.http.post(url,{},{
            "headers" : header 
        }).map((response) => response.json());
    }

    sendData(endpoint:String, body:any)
    {
        let _localStorage = localStorage.getItem('credentials');
        let _parseStorage = JSON.parse(_localStorage);

        let url = this.baseUrl + '' + endpoint;

        let header = new Headers;
        header.append('token',_parseStorage.data.token);

        return this.http.post(url,body,{
            "headers" : header 
        }).map((response) => response.json());
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