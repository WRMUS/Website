import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movement-side-menu',
  templateUrl: './movement-side-menu.component.html',
  styleUrls: [               
                '../side-menu.css'
            ]
})
export class MovementSideMenuComponent implements OnInit {

  router;
  constructor(private _router: Router ) {
    this.router = _router;
  }
  ngOnInit() {
  }

}