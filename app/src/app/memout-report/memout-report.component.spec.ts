import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoutReportComponent } from './memout-report.component';

describe('MemoutReportComponent', () => {
  let component: MemoutReportComponent;
  let fixture: ComponentFixture<MemoutReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoutReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoutReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
