import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { 
    path: '', 
    component: BlogComponent 
  },
  {
    path: 'post/:postId',
    component: PostComponent
  },
  {
    path: 'category/:category',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
