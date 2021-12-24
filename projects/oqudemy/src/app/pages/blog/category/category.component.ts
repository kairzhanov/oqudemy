import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.8s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class CategoryComponent implements OnInit {

  posts!: Post[];
  category: string = '';
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      if (params['category']) {
        this.category = params['category'];
        return this.postService.getCategoryPosts(this.category);
      }
      return empty();
    })).subscribe(result => {
      if (result !== null) {
        this.posts = result;
      }
    });
  }

}
