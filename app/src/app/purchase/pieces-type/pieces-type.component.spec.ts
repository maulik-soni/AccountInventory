import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesTypeComponent } from './pieces-type.component';

describe('PiecesTypeComponent', () => {
  let component: PiecesTypeComponent;
  let fixture: ComponentFixture<PiecesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
