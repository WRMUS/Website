import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html'
 /* styleUrls: ['./movement.component.css']*/
})
export class MovementComponent implements OnInit {

  router;
  constructor(private _router: Router) 
  {
    this.router = _router;  
  }
  ngOnInit(){
  }

}
