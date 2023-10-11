import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryColumnCardImgComponent } from './gallery-column-card-img.component';

describe('GalleryColumnCardImgComponent', () => {
  let component: GalleryColumnCardImgComponent;
  let fixture: ComponentFixture<GalleryColumnCardImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryColumnCardImgComponent]
    });
    fixture = TestBed.createComponent(GalleryColumnCardImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
