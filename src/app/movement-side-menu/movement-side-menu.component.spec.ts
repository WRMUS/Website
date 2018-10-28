import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementSideMenuComponent } from './movement-side-menu.component';

describe('MovementSideMenuComponent', () => {
  let component: MovementSideMenuComponent;
  let fixture: ComponentFixture<MovementSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
