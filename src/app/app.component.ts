import { Component, OnInit } from '@angular/core';
import { APIService } from './functions/api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[':host app-menu{flex-basis:90%}', ':host app-footer{flex-basis:10%}']
})
export class AppComponent implements OnInit {

  constructor(private APIService: APIService) {
    this.APIService.LoadPage = true;
    // if (this.APIService.PageContent === undefined) {
    //   this.APIService.FetchSiteContents().subscribe(data => {
    //     this.APIService.PageContent = data;
    //     this.APIService.LoadPage = true;
    //     console.log("ReadApplicationContentFile: Response ", data);
    //   });
    // }
  }

  ngOnInit() {
  }

}
