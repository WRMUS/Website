import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/add/operator/map';

import { DATA_MODEL, FUTURE_SECTION } from '../model/data-constructor';
import { Section, Person, Quote } from '../model/data-interfaces';
import { PersonService } from '../services/person.service';
import { Rollover } from '../model/rollovers';
import { RolloverService } from '../services/rollover.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public futureSection: any;
  public selectedDetail: Section;
  public selectedQuote: Quote;
  public selectedRollover: Rollover;

  constructor(private route: ActivatedRoute,
              private modalService: NgbModal,
              private navigationService: NavigationService,
              private personService: PersonService,
              private rolloverService: RolloverService) {}

  public ngOnInit() {
    this.route.params
      .map((params: Params): string => params['id'])
      .subscribe((sectionTitle: string): void => {
        this.navigationService.setNavigation(sectionTitle);
        if (document.getElementsByTagName('app-detail')[0]) {
          document.getElementsByTagName('app-detail')[0].scrollTop = 0;
        }
        console.log('DATA_MODEL,' , DATA_MODEL);
        for (let section of DATA_MODEL) {
          if (section.navTitle === sectionTitle) {
            this.selectedDetail = section;
            console.log('this.selectedDetail,', this.selectedDetail);
            break;
          }
        }
      });

    this.futureSection = FUTURE_SECTION;
  }

  public isBoxSection(title: string): boolean {
    return title !== 'About' && title !== 'Principles' && title !== 'Movement';
  }

  public openRollover(rollover: any, rolloverId: number): void {
    this.selectedRollover = this.rolloverService.getRolloverById(rolloverId);
    this.modalService.open(rollover,
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

  public getPerson(personId: number): Person {
    return this.personService.getPersonById(personId);
  }
}
