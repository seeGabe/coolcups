import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupDialogComponent } from './cup-dialog.component';

describe('CupDialogComponent', () => {
  let component: CupDialogComponent;
  let fixture: ComponentFixture<CupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
