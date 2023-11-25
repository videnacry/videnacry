import { TestBed } from '@angular/core/testing';

import { Vector3Service } from './vector3.service';

describe('Vector3Service', () => {
  let service: Vector3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vector3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
