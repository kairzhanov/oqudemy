export class Course {
    title: string = '';
    price: number = 0;
    imageUrl: string = '';
    id!: number;
    enrolled!: boolean;
    progress: number = 0;
    description: string = '';
    rating: number = 5;
    language: string = 'English';
    author: string = 'John Doe';
    lastUpdate: string = '12/2020';
    studentCount: number = 1245;

    constructor(item: Course) {
        Object.assign(this, item);
      }
}