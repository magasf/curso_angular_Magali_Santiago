import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

const routes: Routes = [
  {
    path: 'photo-gallery',
    component: PhotoGalleryComponent
  },
  {
    path: 'photo-detail',
    component: PhotoDetailComponent
  },
  {
    path: 'photo-form',
    component: PhotoFormComponent
  },
  {
    path: '', redirectTo: '/photo-gallery', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/photo-gallery', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
