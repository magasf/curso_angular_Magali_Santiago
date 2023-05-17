import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit{
  photos: IPhoto[] = [];

  constructor(private photoService: PhotoService){
    
  }

  ngOnInit(): void {
    this.photoService.findAll().subscribe(photos => this.photos = photos)
    
  }
}
