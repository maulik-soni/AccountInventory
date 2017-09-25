import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFullProfileComponent } from './company-full-profile.component';

describe('CompanyFullProfileComponent', () => {
  let component: CompanyFullProfileComponent;
  let fixture: ComponentFixture<CompanyFullProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFullProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFullProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
