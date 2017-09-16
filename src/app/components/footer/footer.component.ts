import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private LinkItems: any;
  private menuComponentObject: MenuComponent;
  private currentYear = new Date().getFullYear();
  constructor() {
      this.menuComponentObject = new MenuComponent();
      this.LinkItems = this.menuComponentObject.LinkItems;
  }
  ngOnInit() {
  }


}
