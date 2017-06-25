import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoinReportComponent } from './memoin-report.component';

describe('MemoinReportComponent', () => {
  let component: MemoinReportComponent;
  let fixture: ComponentFixture<MemoinReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoinReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoinReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
