import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjmploComponente1Component } from './ejmplo-componente1.component';

describe('EjmploComponente1Component', () => {
  let component: EjmploComponente1Component;
  let fixture: ComponentFixture<EjmploComponente1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjmploComponente1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjmploComponente1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
