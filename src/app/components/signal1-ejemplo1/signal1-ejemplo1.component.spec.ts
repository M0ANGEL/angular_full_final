import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signal1Ejemplo1Component } from './signal1-ejemplo1.component';

describe('Signal1Ejemplo1Component', () => {
  let component: Signal1Ejemplo1Component;
  let fixture: ComponentFixture<Signal1Ejemplo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signal1Ejemplo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signal1Ejemplo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
