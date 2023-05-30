import { Component } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent {

  postAttivi:any = [];

  constructor(private postsSvc:PostsService) {

    postsSvc.getAllPosts()
    .then(postAttivi => this.postAttivi = postAttivi.filter((item: { active: boolean; }) => item.active == true))

  }

}
