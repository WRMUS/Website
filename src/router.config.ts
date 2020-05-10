import { Routes }                   from "@angular/router";

import { HomeComponent }            from "./app/home/home.component";
import { NalandingComponent }       from "./app/nalanding/nalanding.component";
import { DelandingComponent }       from "./app/delanding/delanding.component";

import { AboutComponent }           from "./app/about/about.component";
import { MovementComponent }        from "./app/movement/movement.component";
import { PeopleComponent }          from "./app/people/people.component";
import { StoriesComponent }         from "./app/stories/stories.component";


import { AboutSideMenuComponent }   from "./app/about-side-menu/about-side-menu.component";
import { MovementSideMenuComponent }from "./app/movement-side-menu/movement-side-menu.component";
import { PeopleSideMenuComponent }  from "./app/people-side-menu/people-side-menu.component";
import { StoriesSideMenuComponent } from "./app/stories-side-menu/stories-side-menu.component";

import { AboutDetailComponent }     from "./app/about-detail/about-detail.component";
import { BioDetailComponent }       from "./app/bio-detail/bio-detail.component";
import { MovementDetailComponent }  from "./app/movement-detail/movement-detail.component";
import { PeopleDetailComponent }    from "./app/people-detail/people-detail.component";
import { StoriesDetailComponent }   from "./app/stories-detail/stories-detail.component";
import { TransComponent } from "./app/trans/trans.component";


export const routerConfig: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'nahome',
        component: NalandingComponent
    },
    {
        path: 'dehome',
        component: DelandingComponent
    },
    {
        path: 'trans',
        component: TransComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        children: [
            {
                path: '',
                component: AboutDetailComponent
            },
            {
                path: ':id',
                component: AboutDetailComponent
            },
            {
                path: ':id/:id',
                component: AboutDetailComponent
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: AboutSideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: AboutSideMenuComponent
            }
        ]

    },{
        path: 'people',
        component: PeopleComponent,
        children: [
            {
                path: '',
                component: PeopleDetailComponent
            },
            {
                path: ':id',
                component: PeopleDetailComponent
            },
            {
                path: ':id/:id',
                component: PeopleDetailComponent
            },        
            {
                path: '',
                outlet: 'sidemenu',
                component: PeopleSideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: PeopleSideMenuComponent
            }
        ]

    },
    {
        path: 'bio',
        component: PeopleComponent,
        children: [
            {
                path: '',
                component: BioDetailComponent
            },
            {
                path: ':id',
                component: BioDetailComponent
            },
            {
                path: ':id/:id',
                component: BioDetailComponent
            },
        
            {
                path: '',
                outlet: 'sidemenu',
                component: PeopleSideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: PeopleSideMenuComponent
            }
        ]

    },
    {
        path: 'movement',
        component: MovementComponent,
        children: [
            {
                path: '',
                component: MovementDetailComponent
            },
            {
                path: ':id',
                component: MovementDetailComponent
                
            },           
            {
                path: ':id/:id',
                component: MovementDetailComponent
                
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: MovementSideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: MovementSideMenuComponent
            }
        ]
    },
    {
        path: 'stories',
        component: StoriesComponent,
        children: [
            {
                path: '',
                component: StoriesDetailComponent
            },
            {
                path: ':id',
                component: StoriesDetailComponent
            },
            {
                path: ':id/:id',
                component: StoriesDetailComponent
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: StoriesSideMenuComponent
            },
            {
                path: ':id',
                outlet: 'sidemenu',
                component: StoriesSideMenuComponent
            }
        ]

    },     
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];