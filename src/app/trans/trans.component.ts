import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.css']
})
export class TransComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  router;
  constructor(private route: ActivatedRoute,
              private modalService: NgbModal,
              private navigationService: NavigationService,
              private _router: Router) {
    
                    this.router = _router; 
              }

  ngOnInit() {
  }

}
