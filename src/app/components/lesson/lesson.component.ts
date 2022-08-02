import { Component, OnInit, Input } from '@angular/core';
import { LessonResponseType, LessonService } from 'src/app/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  @Input () lessonId?: number;
  @Input () title?: string;

  lessonService: LessonService;
  lesson: LessonResponseType

  constructor(lessonService: LessonService) {
    this.lessonService = lessonService;
    this.lesson = {} as LessonResponseType;
  }

  ngOnInit(): void {
  }

  async onClickLesson (id: any) {
    this.lesson = await this.lessonService.getLessonById(id);
  }

}
