import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSideMenuComponent } from './people-side-menu.component';

describe('PeopleSideMenuComponent', () => {
  let component: PeopleSideMenuComponent;
  let fixture: ComponentFixture<PeopleSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
