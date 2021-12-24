export class Qna {
    id!: number;
    question!: string;
    answer!: string;
    lessonId!: number;

    constructor(item: Qna) {
        Object.assign(this, item);
    }
}