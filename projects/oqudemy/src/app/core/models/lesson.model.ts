export class Lesson {
    title: string = '';
    previewUrl: string = '';
    videoUrl: string = '';
    description: string = '';
    length: number = 0;
    courseId: number = 0;
    lessonId: number = 0;

    constructor(item: Lesson) {
        Object.assign(this, item);
    }
}