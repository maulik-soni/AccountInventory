import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoissueReturnReportComponent } from './memoissue-return-report.component';

describe('MemoissueReturnReportComponent', () => {
  let component: MemoissueReturnReportComponent;
  let fixture: ComponentFixture<MemoissueReturnReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoissueReturnReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoissueReturnReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
