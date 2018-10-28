import { Component, Input, OnInit } from '@angular/core';
import { DetailMenuSection } from '../model/data-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.css']
})
export class DetailMenuComponent implements OnInit {
  @Input() public menu: DetailMenuSection;

  public routerBase: string;

  constructor(public router: Router) { }

  public ngOnInit(): void {
    this.routerBase = this.router.routerState.snapshot.url.split('#')[0];
    console.log('model, ', this.routerBase);
  }
}
