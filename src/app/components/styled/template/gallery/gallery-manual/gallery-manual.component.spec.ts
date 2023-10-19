import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryManualComponent } from './gallery-manual.component';

describe('GalleryManualComponent', () => {
  let component: GalleryManualComponent;
  let fixture: ComponentFixture<GalleryManualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryManualComponent]
    });
    fixture = TestBed.createComponent(GalleryManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
