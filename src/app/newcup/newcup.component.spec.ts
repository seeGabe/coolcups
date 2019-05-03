import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcupComponent } from './newcup.component';

describe('NewcupComponent', () => {
  let component: NewcupComponent;
  let fixture: ComponentFixture<NewcupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
