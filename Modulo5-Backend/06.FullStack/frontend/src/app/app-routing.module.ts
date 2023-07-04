import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authors',
    loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule) // lazy loading
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule) // lazy loading
  },
  {
    path: '', redirectTo: 'books', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'books', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
