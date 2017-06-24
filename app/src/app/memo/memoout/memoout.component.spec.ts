import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemooutComponent } from './memoout.component';

describe('MemooutComponent', () => {
  let component: MemooutComponent;
  let fixture: ComponentFixture<MemooutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemooutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemooutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
