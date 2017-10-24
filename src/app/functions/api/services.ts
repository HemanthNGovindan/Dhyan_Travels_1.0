import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class APIService {
    private apiURL = 'http://localhost:8080';
    public PageContent: any;
    public LoadPage: boolean = false;
    public AppData: {};
    private sericeRespondedSource = new Subject<object>();
    sericeResponded$ = this.sericeRespondedSource.asObservable();
    private headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });

    constructor(public http: Http) { }

    // // Service message commands
    announceServiceResponse(data: any) {
        this.sericeRespondedSource.next(data);
    }
    FetchSiteContents() {
        return this.http.get(this.apiURL + '/ReadApplicationContentFile').map(response => response.json());
    }

    NotifyCustomer(req: any) {
        return this.http.post(this.apiURL + '/NotifyCustomer', req, { headers: this.headers }).map(response => response.json());
    }
}