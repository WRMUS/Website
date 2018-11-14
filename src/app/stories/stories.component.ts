import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: [  '../hvrbox.css',                
                '../modal-box.css',                 
                '../question.css',
                '../quote-box.css'
            ]
  
})
export class StoriesComponent implements OnInit {

  router;
  constructor(private _router: Router) 
  {
    this.router = _router;  
  }

  ngOnInit() {
  }

}