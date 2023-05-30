import { Component } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-post-non-attivi',
  templateUrl: './post-non-attivi.component.html',
  styleUrls: ['./post-non-attivi.component.scss']
})
export class PostNonAttiviComponent {

  postNonAttivi:any = [];

  constructor(private postsSvc:PostsService) {

    postsSvc.getAllPosts()
    .then(postNonAttivi => this.postNonAttivi = postNonAttivi.filter((item: { active: boolean; }) => item.active == false))

  }

}
