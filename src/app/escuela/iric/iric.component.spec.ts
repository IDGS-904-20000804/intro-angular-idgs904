import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRICComponent } from './iric.component';

describe('IRICComponent', () => {
  let component: IRICComponent;
  let fixture: ComponentFixture<IRICComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IRICComponent]
    });
    fixture = TestBed.createComponent(IRICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
