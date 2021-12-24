import { Injectable } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
import { Post } from '../models/post.model';
import { posts } from './../data';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  
  getPosts(): Observable<Post[]> {
    return of(posts);
  }

  getPost(postId: number): Observable<Post> {
    const post = posts.filter(l => l.postId === postId);
    if (post.length > 0) {
      return of(post[0]);
    }
    return empty();
  }

  getCategoryPosts(category: string): Observable<Post[]> {
    return of(posts.filter(p => p.category === category));
  }
}
