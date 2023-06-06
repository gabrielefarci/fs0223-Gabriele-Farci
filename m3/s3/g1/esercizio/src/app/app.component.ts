import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { Observable, Subscription, count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'esercizio';

  constructor(private photosSvc:PhotosService) {}

  photosArray:any = [];
  likePhotosArray:any = [];

  sub!:Subscription;

  ngOnInit(): void {
    this.photosSvc.getPhotos().subscribe(res => {
      this.photosArray = res;
      console.log(this.photosArray);
    })
  }

  count = 0;

  like() {
    this.count++;

    let likeButton = document.querySelector('.bi-heart');
    (likeButton as HTMLElement).style.color = 'red';

  }
}
