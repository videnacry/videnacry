import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryColumnComponent } from './gallery-column.component';

describe('GalleryColumnComponent', () => {
  let component: GalleryColumnComponent;
  let fixture: ComponentFixture<GalleryColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryColumnComponent]
    });
    fixture = TestBed.createComponent(GalleryColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
