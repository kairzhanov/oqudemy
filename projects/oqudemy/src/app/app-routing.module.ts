import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/landing/courses/courses.component';
import { AboutComponent } from './pages/landing/about/about.component';
import { ContactUsComponent } from './pages/landing/contact-us/contact-us.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { PromoListComponent } from './pages/landing/promo-list/promo-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { ProfileSettingsComponent } from './pages/dashboard/profile/profile-settings/profile-settings.component';
import { TestComponent } from './pages/dashboard/test/test.component';
import { CourseComponent } from './pages/dashboard/course/course.component';
import { LessonComponent } from './pages/dashboard/lesson/lesson.component';
import { CheckoutComponent } from './pages/dashboard/checkout/checkout.component';
import { CartComponent } from './pages/dashboard/cart/cart.component';
import { PromoComponent } from './pages/landing/promo-list/promo/promo.component';
import { LessonOverviewComponent } from './pages/dashboard/lesson/lesson-overview/lesson-overview.component';
import { LessonQnaComponent } from './pages/dashboard/lesson/lesson-qna/lesson-qna.component';
import { LessonNotesComponent } from './pages/dashboard/lesson/lesson-notes/lesson-notes.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
    data: {
      breadcrumb: 'Courses'
    }
  },
  {
    path: 'course/:courseId',
    component: CourseComponent,
    data: {
      breadcrumb: 'Course'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      breadcrumb: 'About'
    }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: {
      breadcrumb: 'Contact Us'
    }
  },
  // {
  //   path: 'promos',
  //   component: PromoListComponent
  // },
  // {
  //   path: 'promos/:promoId',
  //   component: PromoComponent
  // },
  {
    path: 'dashboard',
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          breadcrumb: 'Dashboard'
        }
      },
      // {
      //   path: 'cart',
      //   component: CartComponent
      // },
      // {
      //   path: 'checkout',
      //   component: CheckoutComponent
      // },
      {
        path: 'lesson/:lessonId',
        component: LessonComponent,
        data: {
          breadcrumb: 'Lesson'
        },
        children: [
          {
            path: '',
            component: LessonOverviewComponent,
          },
          {
            path: 'qna',
            component: LessonQnaComponent,
            data: {
              breadcrumb: 'Q&A'
            }
          },
          {
            path: 'notes',
            component: LessonNotesComponent,
            data: {
              breadcrumb: 'Notes'
            }
          }
        ]
      },
      {
        path: 'courses',
        component: CoursesComponent,
        data: {
          breadcrumb: 'Courses'
        }
      },
      {
        path: 'course/:courseId',
        component: CourseComponent,
        data: {
          breadcrumb: 'Course'
        }
      },
      // {
      //   path: 'test/:testId',
      //   component: TestComponent
      // },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: ProfileComponent,
            data: {
              breadcrumb: 'Profile'
            }
          },
          // {
          //   path: 'settings',
          //   component: ProfileSettingsComponent
          // }
        ]
      },
    ]
  },
  // 3 pages
  { 
    path: 'blog', 
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule),
    data: {
      breadcrumb: 'Blog'
    }
   },
  // 3 pages
  { 
    path: 'error', 
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule),
    data: {
      breadcrumb: 'Error'
    }
    
  },
  // 1 page
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  // 4 pages
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { 
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
