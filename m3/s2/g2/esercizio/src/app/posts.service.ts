import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl:string = 'assets/db.json';

  constructor() {

    this.getAllPosts();

  }

  getAllPosts() {
    return fetch(this.apiUrl).then(res => res.json())
  }
}
