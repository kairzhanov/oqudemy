import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../core/models/post.model';
import { PostService } from '../../core/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.8s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class BlogComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  posts$!: Subscription;

  constructor(private postService: PostService) { }
  
  ngOnDestroy(): void {
    if (this.posts$ !== null && this.posts$ !== undefined) {
      this.posts$.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

  

}
