import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabissueReportComponent } from './labissue-report.component';

describe('LabissueReportComponent', () => {
  let component: LabissueReportComponent;
  let fixture: ComponentFixture<LabissueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabissueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabissueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
