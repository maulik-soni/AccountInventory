import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayableBillComponent } from './payable-bill.component';

describe('PayableBillComponent', () => {
  let component: PayableBillComponent;
  let fixture: ComponentFixture<PayableBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayableBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayableBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
