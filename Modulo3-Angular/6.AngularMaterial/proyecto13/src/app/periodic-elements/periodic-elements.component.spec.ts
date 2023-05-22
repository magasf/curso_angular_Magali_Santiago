import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicElementsComponent } from './periodic-elements.component';

describe('PeriodicElementsComponent', () => {
  let component: PeriodicElementsComponent;
  let fixture: ComponentFixture<PeriodicElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodicElementsComponent]
    });
    fixture = TestBed.createComponent(PeriodicElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
