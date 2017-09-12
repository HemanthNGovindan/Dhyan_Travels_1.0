import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class APIService {
    private apiURL = 'http://localhost:8000';
    public PageContent: any;
    public LoadPage: boolean = false;
    private headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });

    constructor(public http: Http) { }
    // FetchSiteContents() {
    //     return this.http.get(this.apiURL + '/ReadApplicationContentFile').map(response => response.json());
    // }

    // NotifyCustomer(req: any) {
    //     return this.http.post(this.apiURL + '/NotifyCustomer', req, { headers: this.headers }).map(response => response.json());
    // }
}