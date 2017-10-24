import { Component, OnInit } from '@angular/core';
import { APIService } from './functions/api/services';
import { Router } from '@angular/router';
import { ApplicationConstants } from './functions/constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [':host app-menu{flex-basis:90%}', ':host app-footer{flex-basis:10%}']
})
export class AppComponent implements OnInit {

  constructor(private APIService: APIService, private router: Router) {
    this.APIService.LoadPage = false;
    this.APIService.PageContent = {};

    if (this.APIService.PageContent.Content === undefined) {
      this.APIService.FetchSiteContents().subscribe(data => {
        if (data !== null && data !== undefined && data.Content !== null && data.Content !== undefined) {
          this.APIService.PageContent = data;
          this.APIService.LoadPage = true;
          this.APIService.announceServiceResponse(data);
        }
        else {
          this.router.navigate([ApplicationConstants.ErrorPath]);
        }
        console.log("ReadApplicationContentFile: Response ", data);
      }, error => {
        this.router.navigate([ApplicationConstants.ErrorPath]);
      });
    }
  }

  ngOnInit() {
  }

}
