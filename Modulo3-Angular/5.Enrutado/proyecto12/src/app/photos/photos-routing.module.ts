import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

const routes: Routes = [{
  path: 'photo-gallery',
  component: PhotoGalleryComponent
},
{
  path: 'photo-detail/:id',
  component: PhotoDetailComponent
},
{
  path: '',redirectTo: 'photo-gallery', pathMatch:'full'

},
{
  path: '**',redirectTo: 'photo-gallery', pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
