import { Injectable } from '@angular/core';

export type LessonType = {
  id: number;
  title: string;
  videoId: string;
  description: string;
}

export type CourseType = {
  id: number;
  title: string;
  description: string;
}

export type CourseResponseType = {
  title: string;
  description: string;
  lessons: [];
}

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor() { }

  async getCourseById(id: number): Promise<CourseResponseType> {
    const response = await
      fetch(`https://bf-newdev.herokuapp.com/courses/${id}`);

    const data = await response.json() as CourseResponseType;

    return data;
  }

  async getCourses(): Promise<CourseType[]> {
    const response = await
    fetch(`https://bf-newdev.herokuapp.com/courses`);

    const data = await response.json() as CourseType[];

    return data;
  }
}
