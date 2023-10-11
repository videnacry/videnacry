import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryColumnImgTemplateComponent } from './gallery-column-img-template.component';

describe('GalleryColumnImgTemplateComponent', () => {
  let component: GalleryColumnImgTemplateComponent;
  let fixture: ComponentFixture<GalleryColumnImgTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryColumnImgTemplateComponent]
    });
    fixture = TestBed.createComponent(GalleryColumnImgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
