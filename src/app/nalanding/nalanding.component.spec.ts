import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalandingComponent } from './nalanding.component';

describe('NalandingComponent', () => {
  let component: NalandingComponent;
  let fixture: ComponentFixture<NalandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
