import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    //Application Links
    public LinkItems = [
      { LinkName: "Home", Link: "/Home", Active: true },
      { LinkName: "Cabs", Link: "/Cabs", Active: false },
      { LinkName: "About", Link: "/AboutUs", Active: false },
      { LinkName: "Contact", Link: "/ContactUs", Active: false }];

}