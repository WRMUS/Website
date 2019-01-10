import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories-side-menu',
  templateUrl: './stories-side-menu.component.html',
  styleUrls: [               
                '../side-menu.css'
            ]
})
export class StoriesSideMenuComponent implements OnInit {

  router;
  constructor(private _router: Router ) {
    this.router = _router;
  }
  ngOnInit() {
  }

}
