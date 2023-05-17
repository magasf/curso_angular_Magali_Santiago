import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { IPhoto } from '../photo.model';
@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  photo: IPhoto | undefined
  photos: IPhoto[]= [{
    "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  }]

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      console.log(typeof params['id']);
      const id = parseInt(params['id'], 10);// 10 indica base 10(decimal)
      this.photo = this.photos.find(photo => photo.id ===id);
    });
  }
  

}
