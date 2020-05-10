import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routerConfig } from "../router.config";
import { RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';



import { NalandingComponent } from './nalanding/nalanding.component';
import { DelandingComponent } from './delanding/delanding.component';

import { AboutSideMenuComponent } from './about-side-menu/about-side-menu.component';
import { AboutDetailComponent } from './about-detail/about-detail.component';
import { MovementSideMenuComponent } from './movement-side-menu/movement-side-menu.component';
import { PeopleSideMenuComponent } from './people-side-menu/people-side-menu.component';
import { StoriesSideMenuComponent } from './stories-side-menu/stories-side-menu.component';
import { MovementComponent } from './movement/movement.component';
import { PeopleComponent } from './people/people.component';
import { StoriesComponent } from './stories/stories.component';
import { MovementDetailComponent } from './movement-detail/movement-detail.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';

import { RolloverService } from './services/rollover.service';
import { PersonService } from './services/person.service';
import { NavigationService } from './services/navigation.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BioDetailComponent } from './bio-detail/bio-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { MatToolbarModule, MatCardModule, MatGridListModule } from '@angular/material';
import { TransComponent } from './trans/trans.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,    
    NalandingComponent,
    AboutSideMenuComponent,
    AboutDetailComponent,
    MovementSideMenuComponent,
    PeopleSideMenuComponent,
    StoriesSideMenuComponent,
    MovementComponent,
    PeopleComponent,
    StoriesComponent,
    MovementDetailComponent,
    PeopleDetailComponent,
    StoriesDetailComponent,
    BioDetailComponent,
    DelandingComponent,
    TransComponent
  ],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
   
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule, 
    AngularSvgIconModule,
    NgbModule,
    RouterModule.forRoot(routerConfig)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
    providers: [
    NavigationService,
    PersonService,
    RolloverService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }