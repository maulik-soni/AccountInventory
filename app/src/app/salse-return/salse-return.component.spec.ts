import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalseReturnComponent } from './salse-return.component';

describe('SalseReturnComponent', () => {
  let component: SalseReturnComponent;
  let fixture: ComponentFixture<SalseReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalseReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalseReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
