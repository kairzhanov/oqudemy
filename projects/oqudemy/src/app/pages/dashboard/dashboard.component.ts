import { Component, OnInit } from '@angular/core';
import { Course } from '../../core/models/course.model';
import { CourseService } from '../../core/services/course.service';
import { LoaderService } from '../../core/services/loader.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  myCourses: Course[] = [];
  recommendedCourses: Course[] = [];

  constructor(private courseService: CourseService, private loaderService: LoaderService) { }

  ngOnInit(): void {

    this.courseService.getCourses().subscribe(res => {
      this.myCourses = res.filter(c => c.enrolled === true);
      this.recommendedCourses = res.filter(c => c.enrolled === false);
    });


  }

}
