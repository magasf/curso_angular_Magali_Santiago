import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormValidationComponent } from './user-form-validation.component';

describe('UserFormValidationComponent', () => {
  let component: UserFormValidationComponent;
  let fixture: ComponentFixture<UserFormValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormValidationComponent]
    });
    fixture = TestBed.createComponent(UserFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
