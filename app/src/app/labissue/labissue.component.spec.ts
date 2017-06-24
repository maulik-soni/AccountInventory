import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabissueComponent } from './labissue.component';

describe('LabissueComponent', () => {
  let component: LabissueComponent;
  let fixture: ComponentFixture<LabissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
