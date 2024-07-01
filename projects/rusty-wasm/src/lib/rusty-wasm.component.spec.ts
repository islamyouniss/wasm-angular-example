import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustyWasmComponent } from './rusty-wasm.component';

describe('RustyWasmComponent', () => {
  let component: RustyWasmComponent;
  let fixture: ComponentFixture<RustyWasmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RustyWasmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RustyWasmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
