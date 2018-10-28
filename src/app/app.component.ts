import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   encapsulation: ViewEncapsulation.None 
})

export class AppComponent {
  title = 'app works!';
  router;
  constructor(private _router: Router ) {
    this.router = _router;
  }
  
public getActiveClass(activeValue:boolean) {
    if(activeValue){
        return 'active';
    }
  }
    
}