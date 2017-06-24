import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbookReportComponent } from './cashbook-report.component';

describe('CashbookReportComponent', () => {
  let component: CashbookReportComponent;
  let fixture: ComponentFixture<CashbookReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbookReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbookReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
