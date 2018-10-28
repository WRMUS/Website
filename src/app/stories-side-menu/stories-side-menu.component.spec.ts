import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesSideMenuComponent } from './stories-side-menu.component';

describe('StoriesSideMenuComponent', () => {
  let component: StoriesSideMenuComponent;
  let fixture: ComponentFixture<StoriesSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
