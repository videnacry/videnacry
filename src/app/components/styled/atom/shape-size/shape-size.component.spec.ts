import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeSizeComponent } from './shape-size.component';

describe('ShapeSizeComponent', () => {
  let component: ShapeSizeComponent;
  let fixture: ComponentFixture<ShapeSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShapeSizeComponent]
    });
    fixture = TestBed.createComponent(ShapeSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
