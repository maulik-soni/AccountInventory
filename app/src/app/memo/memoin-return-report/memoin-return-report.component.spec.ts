import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoinReturnReportComponent } from './memoin-return-report.component';

describe('MemoinReturnReportComponent', () => {
  let component: MemoinReturnReportComponent;
  let fixture: ComponentFixture<MemoinReturnReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoinReturnReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoinReturnReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
