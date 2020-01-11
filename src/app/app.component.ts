import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './homepage-media.css',
    './homepage.css',
    './breadcrumb.css',
    './navbar.css',
    './navbar-media.css'
  ],
  encapsulation: ViewEncapsulation.None

  /*
    styleUrls: ['./app.component.css'],
  */
})

export class AppComponent {
  title = 'app works!';
  router;
  constructor(private _router: Router) {
    this.router = _router;
  }

  public getActiveClass(activeValue: boolean) {
    if (activeValue) {
      return 'active';
    }
  }

}