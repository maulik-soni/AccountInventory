import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievableBillComponent } from './recievable-bill.component';

describe('RecievableBillComponent', () => {
  let component: RecievableBillComponent;
  let fixture: ComponentFixture<RecievableBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievableBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievableBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
