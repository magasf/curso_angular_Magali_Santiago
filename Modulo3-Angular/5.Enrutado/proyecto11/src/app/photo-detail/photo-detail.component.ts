import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../models/photo.model';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  photo: IPhoto | undefined
  constructor(private route: ActivatedRoute,
              private photoService: PhotoService){}
  
  ngOnInit(): void {
   this.route.params.subscribe(params => {
    const id = parseInt(params['id'], 10);
    this.photoService.findById(id).subscribe(data => this.photo = data)
   })
  }

}
