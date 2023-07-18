import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormImagesComponent } from './book-form-images.component';

describe('BookFormImagesComponent', () => {
  let component: BookFormImagesComponent;
  let fixture: ComponentFixture<BookFormImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookFormImagesComponent]
    });
    fixture = TestBed.createComponent(BookFormImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
