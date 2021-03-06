import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostComponent } from './post/post.component';
import { UiModule } from 'projects/ui/src/app/components/ui.module';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    UiModule
  ],
  exports: [
    BlogComponent,
    PostComponent
  ]
})
export class BlogModule { }
