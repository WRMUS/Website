import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  router;
  constructor( private _router: Router ) 
  {
    this.router = _router;  
  }

  ngOnInit() {
  }

}
