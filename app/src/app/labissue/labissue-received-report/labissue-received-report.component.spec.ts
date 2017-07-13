import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabissueReceivedReportComponent } from './labissue-received-report.component';

describe('LabissueReceivedReportComponent', () => {
  let component: LabissueReceivedReportComponent;
  let fixture: ComponentFixture<LabissueReceivedReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabissueReceivedReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabissueReceivedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
