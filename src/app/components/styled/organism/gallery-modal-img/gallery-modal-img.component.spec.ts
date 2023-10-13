import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryModalImgComponent } from './gallery-modal-img.component';

describe('GalleryModalImgComponent', () => {
  let component: GalleryModalImgComponent;
  let fixture: ComponentFixture<GalleryModalImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryModalImgComponent]
    });
    fixture = TestBed.createComponent(GalleryModalImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
