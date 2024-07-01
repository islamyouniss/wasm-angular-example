import { TestBed } from '@angular/core/testing';

import { RustyWasmService } from './rusty-wasm.service';

describe('RustyWasmService', () => {
  let service: RustyWasmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RustyWasmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
