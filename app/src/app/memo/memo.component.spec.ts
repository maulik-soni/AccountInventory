import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoComponent } from './memo.component';

describe('MemoinComponent', () => {
  let component: MemoComponent;
  let fixture: ComponentFixture<MemoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
