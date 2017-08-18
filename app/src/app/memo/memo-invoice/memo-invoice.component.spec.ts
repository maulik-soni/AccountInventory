import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoInvoiceComponent } from './memo-invoice.component';

describe('MemoInvoiceComponent', () => {
  let component: MemoInvoiceComponent;
  let fixture: ComponentFixture<MemoInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
