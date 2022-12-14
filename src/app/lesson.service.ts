import { Injectable } from '@angular/core';

export type InstructorType = {
  avatarUrl: string;
  fullName: string;
}

export type LessonResponseType = {
  title: string;
  description: string;
  videoId: string
  instructor: InstructorType
}

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  async getLessonById(id: number): Promise<LessonResponseType> {
    const response = await
      fetch(`https://bf-newdev.herokuapp.com/lessons/${id}`);

    const data = await response.json() as LessonResponseType;

    return data
  }

}
