import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { 
    path: '', 
    component: BlogComponent,
  },
  {
    path: 'post/:postId',
    component: PostComponent,
    data: {
      breadcrumb: 'Post'
    }
  },
  {
    path: 'category/:category',
    component: CategoryComponent,
    data: {
      breadcrumb: 'Category'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
