import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/shared/constants';
import { IUser } from '../user.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  imagePreview: string | undefined; // para mostrar
  imageFile: File | undefined; // para subir
  user: IUser | undefined; // traer el usuario para comprobar si tiene avatar y mostrarlo

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    this.httpClient
      .get<IUser>(`${BASE_URL}/users/current`)
      .subscribe(data => this.user = data);
  }

  onFileSelected(event: Event) {

    let target = event.target as HTMLInputElement;

    if (target.files !== null && target.files.length > 0) {
      this.imageFile = target.files[0];
      console.log(this.imageFile);

      // Mostrar la imagen al usuario
      let reader = new FileReader();
      reader.onload = ev => this.imagePreview = reader.result as string;// qué hacer cuando se lea la imagen
      reader.readAsDataURL(this.imageFile); // leer la imagen
    }
  }

  save() {
    if(!this.imageFile) return;

    // La imagen no es un archivo texto, es binario por lo que necesitamos enviarla en un FormData
    // para que se gestione correctamente
    let formData = new FormData();
    formData.append('file', this.imageFile);

    this.httpClient
                .post(`${BASE_URL}/users/avatar`, formData)
                .subscribe(data => {
                  // Recargar el usuario con la nueva foto y recargar el formulario de avatar
                  console.log(data);
                  this.loadCurrentUser();
                  this.imageFile = undefined;
                  this.imagePreview = undefined;
                });
  }


}
