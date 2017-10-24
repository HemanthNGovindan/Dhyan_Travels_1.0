import { Component, OnInit } from '@angular/core';
import { APIService } from '../../functions/api/services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  private AboutUsPageHeader: string;
  private AboutUsText: string;
  private TravelSolganText: string;
  private TourSloganText: string;
  private subscription: Subscription;
  constructor(public APIService: APIService) {

    this.subscription = this.APIService.sericeResponded$.subscribe(
      data => {
        this.AssignValues();
      });
  }

  ngOnInit() {
    if (this.APIService.PageContent.Content !== undefined) {
      this.AssignValues();
    }
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  AssignValues() {
    this.AboutUsPageHeader = this.APIService.PageContent.Content.PageText.AboutUsPageHeader;
    this.AboutUsText = this.APIService.PageContent.Content.PageText.AboutUsText;
    this.TravelSolganText = this.APIService.PageContent.Content.PageText.TravelSolganText;
    this.TourSloganText = this.APIService.PageContent.Content.PageText.TourSloganText;
  }

}
