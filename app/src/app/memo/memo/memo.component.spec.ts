import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoComponent } from './memo.component';

describe('MemoinComponent', () => {
  let component: MemoinComponent;
  let fixture: ComponentFixture<MemoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
