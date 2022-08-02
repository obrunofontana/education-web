import { Component, OnInit, Input } from '@angular/core';
import { LessonType } from 'src/app/course.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input () lessonParam: any;

  constructor() {}

  ngOnInit(): void {
    console.log('log no componente room');
  }

}
