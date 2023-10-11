import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSizeComponent } from './standard-size.component';

describe('StandardSizeComponent', () => {
  let component: StandardSizeComponent;
  let fixture: ComponentFixture<StandardSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardSizeComponent]
    });
    fixture = TestBed.createComponent(StandardSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
