import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoissueReportComponent } from './memoissue-report.component';

describe('MemoissueReportComponent', () => {
  let component: MemoissueReportComponent;
  let fixture: ComponentFixture<MemoissueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoissueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoissueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
