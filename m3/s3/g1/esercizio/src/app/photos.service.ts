import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=6';

  constructor(private http:HttpClient) {}

  getPhotos() {
    return this.http.get(this.apiUrl);
  }
}
