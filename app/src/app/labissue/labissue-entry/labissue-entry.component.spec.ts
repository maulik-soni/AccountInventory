import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabissueEntryComponent } from './labissue-entry.component';

describe('LabissueEntryComponent', () => {
  let component: LabissueEntryComponent;
  let fixture: ComponentFixture<LabissueEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabissueEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabissueEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
