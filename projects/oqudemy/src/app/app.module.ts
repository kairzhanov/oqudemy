import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { CoursesComponent } from './pages/landing/courses/courses.component';
import { AboutComponent } from './pages/landing/about/about.component';
import { ContactUsComponent } from './pages/landing/contact-us/contact-us.component';
import { CourseComponent } from './pages/dashboard/course/course.component';
import { TestComponent } from './pages/dashboard/test/test.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { ProfileSettingsComponent } from './pages/dashboard/profile/profile-settings/profile-settings.component';
import { PromoListComponent } from './pages/landing/promo-list/promo-list.component';
import { PromoComponent } from './pages/landing/promo-list/promo/promo.component';
import { UiModule } from 'projects/ui/src/app/components/ui.module';
import { RouterModule } from '@angular/router';
import { LessonModule } from './pages/dashboard/lesson/lesson.module';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './core/guards/auth.guard';
import { ExitGuard } from './core/guards/exit.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './pages/auth/auth.module';
import { BlogModule } from './pages/blog/blog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RoleGuard } from './core/guards/role.guard';
import { UserRoleGuard } from './core/guards/user-role.guard';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    ContactUsComponent,
    CourseComponent,
    TestComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileSettingsComponent,
    PromoListComponent,
    PromoComponent,
  ],
  imports: [
    AppRoutingModule,
    UiModule,
    RouterModule,
    LessonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AuthModule,
    BlogModule,
  ],
  providers: [
    AuthGuard, ExitGuard, RoleGuard, UserRoleGuard,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
