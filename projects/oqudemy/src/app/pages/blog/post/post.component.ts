import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post!: Post;
  postId!: number;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      if (params['postId']) {
        this.postId = Number(params['postId']);
        return this.postService.getPost(this.postId);
      }
      return empty();
    })).subscribe(result => {
      if (result !== null) {
        this.post = result;
      }
    });
  }

}
