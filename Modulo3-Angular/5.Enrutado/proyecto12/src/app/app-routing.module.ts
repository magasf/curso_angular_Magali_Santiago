import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'photos',//lazy loading
    loadChildren: ()=> import('./photos/photos.module').then(m => m.PhotosModule)//importa el modulo photos solo si entras al modulo//promesas, asincrona
  },
  {
    path: 'users',
    loadChildren: ()=> import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: '',redirectTo: 'photos', pathMatch:'full'

  },
  {
    path: '**',redirectTo: 'photos', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
