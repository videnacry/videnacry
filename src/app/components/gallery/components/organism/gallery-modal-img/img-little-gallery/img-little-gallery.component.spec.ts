import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLittleGalleryComponent } from './img-little-gallery.component';

describe('ImgLittleGalleryComponent', () => {
  let component: ImgLittleGalleryComponent;
  let fixture: ComponentFixture<ImgLittleGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgLittleGalleryComponent]
    });
    fixture = TestBed.createComponent(ImgLittleGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
