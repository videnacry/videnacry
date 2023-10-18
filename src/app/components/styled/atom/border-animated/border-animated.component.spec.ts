import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderAnimatedComponent } from './border-animated.component';

describe('BorderAnimatedComponent', () => {
  let component: BorderAnimatedComponent;
  let fixture: ComponentFixture<BorderAnimatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderAnimatedComponent]
    });
    fixture = TestBed.createComponent(BorderAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
