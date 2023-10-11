import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryArticleComponent } from './gallery-article.component';

describe('GalleryArticleComponent', () => {
  let component: GalleryArticleComponent;
  let fixture: ComponentFixture<GalleryArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryArticleComponent]
    });
    fixture = TestBed.createComponent(GalleryArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
