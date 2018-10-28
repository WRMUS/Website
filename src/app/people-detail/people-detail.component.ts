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


@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})

export class PeopleDetailComponent implements OnInit {

  public gameChangerSection_1: any;
  public gameChangerSection_2: any;
  public gameChangerSection_3: any;
  public gameChangerSection_4: any;
  public selectedQuote: Quote;
  public selectedBioQuote: Quote;
  public selectedRollover: Rollover;
  public bioID: number;
  router;
  
  breakpoint: number;
  private nbCols: number = 2;
  public rowHeightRatio:any = "2:0.8";
  
  constructor(private _router: Router,
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
    this.router.events.subscribe(() =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    );
  }
    
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? this.nbCols = 1 : this.nbCols = 2;
    (event.target.innerWidth <= 1000) ? this.rowHeightRatio = "2:1": this.rowHeightRatio = "2:1";    

  }
  
public openModalFromOtherPage(content: any, pageName: string, personId: number, title: string, subtitle?: string ){
      let section = DATA_MODEL.find( (item: any)=>{
        return item.navTitle == pageName;
      })
      let question = section.questions.find( (item: any)=>{
        return item.title == title;
      })
      let currentQuote;
      if(!subtitle){
        currentQuote = question.quotes.find( (item:any)=>{
         return item.personId == +personId
       })
     }else{
       currentQuote = question.quotes.find( (item:any)=>{
        return item.tagline == subtitle
      })
     }
      this.openQuoteModal(content, currentQuote);

  }
 
  public getPerson(personId: number): Person {
    return this.personService.getPersonById(personId);
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
    this.modalService.open( content,
                            { backdrop: true,
                              keyboard: true,
                              size: 'lg',
                              windowClass: 'show'
                            }
                          )
                          .result
                          .then((result) => {
                                             console.log('Closed with: ${result}');
                                            }, (reason) =>{
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
  
  public openBioQuoteWindow(id: any ): void {
    this.bioID = id
    window.open('#/bio/'+id, '_blank');
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
