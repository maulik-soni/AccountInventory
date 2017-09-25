import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFullProfileComponent } from './vendor-full-profile.component';

describe('VendorFullProfileComponent', () => {
  let component: VendorFullProfileComponent;
  let fixture: ComponentFixture<VendorFullProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorFullProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorFullProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
