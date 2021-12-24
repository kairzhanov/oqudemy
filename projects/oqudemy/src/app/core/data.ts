import { Course } from "./models/course.model";
import { Lesson } from "./models/lesson.model";
import { Post } from "./models/post.model";
import { Qna } from "./models/qna.model";

export const courses: Course[] = [
    new Course ({
        title: "C# Basic",
        price: 10.0,
        imageUrl: '/assets/img/csharp.png',
        id: 1,
        enrolled: true,
        progress: 45,
        description: 'C# Basic course for beginners',
        rating: 5,
        author: 'John Doe',
        lastUpdate: '12/2020',
        studentCount: 1245,
        language: 'English',
    }),
    new Course ({
        title: "C++ Basic",
        price: 15.0,
        imageUrl: '/assets/img/cplus.png',
        id: 2,
        enrolled: false,
        progress: 0,
        description: 'C++ Basic course for beginners',
        rating: 4,
        author: 'John Doe',
        lastUpdate: '11/2020',
        studentCount: 45,
        language: 'English',
    }),
    new Course ({
        title: "Angular Advanced",
        price: 15.0,
        imageUrl: '/assets/img/angular.png', 
        id: 3,
        enrolled: false,
        progress: 0,
        description: 'Angular Advanced course for experienced',
        rating: 3,
        author: 'John Doe',
        lastUpdate: '12/2021',
        studentCount: 12,
        language: 'English',
    }),
    new Course ({
        title: "Angular Basic",
        price: 10.0,
        imageUrl: '/assets/img/angular.png',
        id: 4,
        enrolled: false,
        progress: 0,
        description: 'Angular Basic course for beginners',
        rating: 5,
        author: 'John Doe',
        lastUpdate: '11/2020',
        studentCount: 125,
        language: 'English',
    }),
];

export const lessons: Lesson[] = [
    new Lesson({
        title: 'Introduction',
        videoUrl: '4vQJMyk2DPU',
        description: 'Introduction',
        courseId: 1,
        length: 5,
        previewUrl: 'assets/img/lesson-1.png',
        lessonId: 1,
    }),
    new Lesson({
        title: 'Hello World and dotnet CLI',
        videoUrl: 'eXtW87Wi3Bw',
        description: 'Hello World and dotnet CLI',
        courseId: 1,
        length: 6,
        previewUrl: 'assets/img/lesson-2.png',
        lessonId: 2,
    }),
    new Lesson({
        title: 'Application Architecture',
        videoUrl: 'l9yOMPx3QSE',
        description: 'Application Architecture',
        courseId: 1,
        length: 6,
        previewUrl: 'assets/img/lesson-3.png',
        lessonId: 3,
    }),
    new Lesson({
        title: 'Methods, Static Methods, Instance Methods',
        videoUrl: '6G2NbfadwRA',
        description: 'Methods, Static Methods, Instance Methods',
        courseId: 1,
        length: 9,
        previewUrl: 'assets/img/lesson-4.png',
        lessonId: 4,
    }),
    new Lesson({
        title: 'Command Line Arguments with dotnet CLI',
        videoUrl: 'Enocgj5T6y0',
        description: 'Command Line Arguments with dotnet CLI',
        courseId: 1,
        length: 5,
        previewUrl: 'assets/img/lesson-5.png',
        lessonId: 5,
    }),
    new Lesson({
        title: 'Command Line Arguments with dotnet CLI',
        videoUrl: 'Enocgj5T6y0',
        description: 'Command Line Arguments with dotnet CLI',
        courseId: 1,
        length: 5,
        previewUrl: 'assets/img/lesson-6.png',
        lessonId: 6,
    }),
];

export const qnas: Qna[] = [
    new Qna({
        question: 'Question 1',
        answer: 'Long long answer to question 1',
        lessonId: 1,
        id: 1
    }),
    new Qna({
        question: 'Question 2',
        answer: 'Long long answer to question 2',
        lessonId: 1,
        id: 2
    }),
    new Qna({
        question: 'Question 3',
        answer: 'Long long answer to question 3',
        lessonId: 1,
        id: 3
    }),
];

export const posts: Post[] = [
    new Post({
        title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
        category: 'Automotive, Finance',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..',
        author: 'David Grzyb',
        publishDate: 'January 12th, 2020',
        postId: 1,
        photoUrl: 'https://source.unsplash.com/collection/1346951/1000x500?sig=2'
    }),
    new Post({
        title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
        category: 'Sports',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..',
        author: 'David Grzyb',
        publishDate: 'October 22nd, 2019',
        postId: 2,
        photoUrl: 'https://source.unsplash.com/collection/1346951/1000x500?sig=3'
    }),
    new Post({
        title: 'Lorem Ipsum Dolor Sit Amet Dolor Sit Amet',
        category: 'Technology',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..',
        author: 'David Grzyb',
        publishDate: 'April 25th, 2020',
        postId: 3,
        photoUrl: 'https://source.unsplash.com/collection/1346951/1000x500?sig=3'
    }),
]