import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute  } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { DATA_MODEL, FUTURE_SECTION } from '../model/data-constructor';
import { GAME_CHANGERS_SECTION_1,GAME_CHANGERS_SECTION_2,
         GAME_CHANGERS_SECTION_3,GAME_CHANGERS_SECTION_4 } from '../model/game-changers';

import { Section, Person, Quote } from '../model/data-interfaces';

import { PersonService } from '../services/person.service';
import { Rollover } from '../model/rollovers';
import { RolloverService } from '../services/rollover.service';

import { GAME_CHANGERS_QUOTES } from '../model/quotes';

@Component({
  selector: 'app-bio-detail',
  templateUrl: './bio-detail.component.html',
  styleUrls: ['../photo.css',
              '../question.css',
              '../media-box.css'
             ]
  
  /*
  styleUrls: ['./bio-detail.component.css']
  */
})

export class BioDetailComponent implements OnInit {

  public gameChangerSection_1: any;
  public gameChangerSection_2: any;
  public gameChangerSection_3: any;
  public gameChangerSection_4: any;
  
  public gameChangerQuotes: any;
  
  currentYear: number = new Date().getFullYear();

  public selectedQuote: Quote;
  public selectedBioQuote: Quote;
  public selectedRollover: Rollover;
  public bioID: number;
  private sub: any;
  public toggleText = 'Read';
  public toggle = true;
  router;
  constructor(private _router: Router,
              private route: ActivatedRoute,
              private personService: PersonService,
              private rolloverService: RolloverService,
              private modalService: NgbModal) {
    this.router = _router;  
  }
  

  ngOnInit() {
    this.gameChangerSection_1 = GAME_CHANGERS_SECTION_1;
    this.gameChangerSection_2 = GAME_CHANGERS_SECTION_2;
    this.gameChangerSection_3 = GAME_CHANGERS_SECTION_3;
    this.gameChangerSection_4 = GAME_CHANGERS_SECTION_4;
    this.gameChangerQuotes    = GAME_CHANGERS_QUOTES;
    this.router.events.subscribe(() =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    );
    
    this.sub = this.route.params.subscribe(params => {
       this.bioID = +params['id'];
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public togggle(){
    this.toggleText = this.toggle ? 'Reade':'Hidee';
    this.toggle = this.toggle ? false : true;
    return this.toggle;
  }


  public togglle(){
  this.toggleText = this.toggle ? 'Reqldwdklweaadd':'Hidmaxnsmcnee'
    this.toggle = !this.toggle;
  }
  
  public getPerson(personId: number): Person {
    return this.personService.getPersonById(personId);
  }
  
  public getPersonPhoto(id:number){
    let persons:any = GAME_CHANGERS_SECTION_1[0].quotes;
    let person = persons.find( item=>{
      return item.personId == id
    })
    return person.photo
  } 
  
  public getPersonQuote(id:number){
    let persons:any = GAME_CHANGERS_SECTION_1[0].quotes;
    let person = persons.find( item=>{
      return item.personId == id
    })
    return person.quote
  } 
  
  public openRollover(rollover: any, rolloverId: number): void {
    this.selectedRollover = this.rolloverService.getRolloverById(rolloverId);
    this.modalService.open(rollover, { backdrop: true,
                                       keyboard: true,
                                       size: 'lg',
                                       windowClass: 'show'
                                    }
                          ).result.then(
                                        (result) => { console.log('Closed with: ${result}');}, 
                                        (reason) => { this.selectedQuote =          
                                                      undefined;console.log('Dismissed{this.getDismissReason(reason)}');
                                                    }
                                        );
  }

  public openQuoteModal(content: any, quote: Quote): void {
    this.selectedQuote = quote;
    this.modalService.open(content,
                          { backdrop: true,
                            keyboard: true,
                            size: 'lg',
                            windowClass: 'show'
                          })
                          .result
                          .then((result) => {
                                             console.log('Closed with: ${result}');
                                            }, (reason) => {
                                                            this.selectedQuote = undefined;
                                                            console.log('Dismissed ${this.getDismissReason(reason)}');
                                                           }
                                );
  }
  
  public openBioQuoteModal(content: any, quote: Quote,name:any): void {
    this.selectedQuote = quote;
    this.modalService.open(content,
                          { backdrop: true,
                            keyboard: true,
                            size: 'lg',
                            windowClass: 'show'
                          })
                          .result
                          .then((result) => {
                                             console.log('Closed with: ${result}');
                                            }, (reason) => {
                                                            this.selectedQuote = undefined;
                                                            console.log('Dismissed ${this.getDismissReason(reason)}');
                                                           }
                                );
  }
  
  public openBioQuoteWindow( quote: Quote, id: any ): void {
    this.selectedQuote = quote;
    this.bioID = id
    window.open('#/people/bio/'+id, '_parent');
  }
  
  private flattenFragmentId(fragment: string): string {
    if (!fragment) {
      return fragment;
    }
    let fragments = fragment.split(" >> ");
    if (fragments.length > 1) {
      console.log("x : ", fragments[0] + fragments[1]);
      return fragments[0].trim() + fragments[1].trim();
    } else {
      fragments = fragment.split(" & ");
      if (fragments.length > 1) {
        return fragments[0].trim() + fragments[1].trim();
      } else {
        if (fragment === 'How to Support') {
          return 'HowtoSupport';
        } else {
          if (fragment === 'The Project') {
            return 'TheProject';
          } else {
            return fragment;
          }
        }
      }
    }
  }
  
}
