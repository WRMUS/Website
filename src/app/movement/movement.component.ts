import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',

  styleUrls: [
    '../question.css',
    '../chart.css',
    '../video-frame.css',
    './movement.component.css',
    '../hvrbox.css',
    '../modal-box.css',
    '../media-box.css',
    '../quote-box.css',
    '../accardion.css',
    '../image-frame.css',
    '../rollover.css',
  ]

  /* styleUrls: ['./movement.component.css']*/

})
export class MovementComponent implements OnInit {

  router;
  constructor(private _router: Router) {
    this.router = _router;
  }
  ngOnInit() {
  }

}
