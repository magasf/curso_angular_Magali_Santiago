import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookFormImagesComponent } from './book-form-images/book-form-images.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'gallery',
    component: BookGalleryComponent
  },
  {
    path: 'new',
    component: BookFormComponent
  },
  {
    path: ':id',
    component: BookDetailComponent
  },
  {
    path: ':id/edit',
    component: BookFormComponent
  },
  {
    path: ':id/images',
    component: BookFormImagesComponent
  },
  {
    path: 'author/:authorId',
    component: BookListComponent
  },
  {
    path: 'category/:categoryId',
    component: BookListComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
