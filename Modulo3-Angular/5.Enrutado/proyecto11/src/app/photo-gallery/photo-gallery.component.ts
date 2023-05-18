import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit{
  photos: IPhoto[] = [];

  constructor(private route: ActivatedRoute,
              private photoService: PhotoService){
    
  }

  ngOnInit(): void {
    this.photoService.findAll().subscribe(data =>{
      //this.photos = photos;
      this.photos = data.slice(0,10);//cargamos solo los 10 primeros

    })
    
  }
}
