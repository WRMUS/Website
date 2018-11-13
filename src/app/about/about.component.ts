import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';

import { DATA_MODEL, FUTURE_SECTION } from '../model/data-constructor';
import { GAME_CHANGERS_SECTION_1 } from "../model/game-changers";
import { Section, Person, Quote } from '../model/data-interfaces';
import { PersonService } from '../services/person.service';
import { Rollover } from '../model/rollovers';
import { RolloverService } from '../services/rollover.service';
import { NavigationService } from '../services/navigation.service';
import { escape } from 'querystring';
import { getElemCoords, iCoords } from '../model/elemCoords';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  /*
  *  styleUrls: ['./about.component.css']
  */
  styleUrls: [
                '../hvrbox.css', 
                '../modal-box.css', 
                '../media-box.css', 
                '../quote-box.css',
                '../question.css'
            ]
})

export class AboutComponent implements OnInit {

  public futureSection: any;
  public selectedDetail: Section;
  public gameChangers = DATA_MODEL[1];
  public selectedQuote: Quote;
  public selectedRollover: Rollover;
  public pageTitle: string;
  router;
  constructor(private route: ActivatedRoute,
              private modalService: NgbModal,
              private navigationService: NavigationService,
              private personService: PersonService,
              private rolloverService: RolloverService,
              private _router: Router) {
              
                    this.router = _router; 
              }


  
  
  ngOnInit() {
  
  }
  public getPerson(personId: number): Person {
    return this.personService.getPersonById(personId);
  }
  
  public showBio(id:number, content){
    let persons:any = GAME_CHANGERS_SECTION_1[0].quotes;
    let person = persons.find( item=>{
      return item.personId == id
    })
    this.openQuoteModal(content, person)
  } 
  
  public openQuoteModal(content: any, quote: Quote): void {
    this.selectedQuote = quote;
    this.modalService.open(content,
      {backdrop: true,
        keyboard: true,
        size: 'lg',
        windowClass: 'show'}).result.then((result) => {
      console.log('Closed with: ${result}');
    }, (reason) => {
      this.selectedQuote = undefined;
      console.log('Dismissed ${this.getDismissReason(reason)}');
    });
  }
}
