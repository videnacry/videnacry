import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelColoredComponent } from './panel-colored.component';

describe('PanelColoredComponent', () => {
  let component: PanelColoredComponent;
  let fixture: ComponentFixture<PanelColoredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelColoredComponent]
    });
    fixture = TestBed.createComponent(PanelColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
