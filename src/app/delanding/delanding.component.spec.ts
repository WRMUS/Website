import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelandingComponent } from './delanding.component';

describe('DelandingComponent', () => {
  let component: DelandingComponent;
  let fixture: ComponentFixture<DelandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
