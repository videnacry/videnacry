import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTabletComponent } from './gallery-tablet.component';

describe('GalleryTabletComponent', () => {
  let component: GalleryTabletComponent;
  let fixture: ComponentFixture<GalleryTabletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryTabletComponent]
    });
    fixture = TestBed.createComponent(GalleryTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
