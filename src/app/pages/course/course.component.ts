import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseResponseType, CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseService: CourseService;
  course: CourseResponseType;
  lessonToShow: any;

  constructor(courseService: CourseService, private route: ActivatedRoute) {
    this.courseService = courseService;
    this.course = {} as CourseResponseType;
  }

  async ngOnInit(): Promise<void> {
    this.course = await this.courseService.getCourseById(2);
  }

  async setLessonToShow(lesson: any) {
    this.lessonToShow = lesson;
  }
}
