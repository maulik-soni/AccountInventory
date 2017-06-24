import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalseReportComponent } from './salse-report.component';

describe('SalseReportComponent', () => {
  let component: SalseReportComponent;
  let fixture: ComponentFixture<SalseReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalseReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
