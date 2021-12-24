export class Post {
    title!: string;
    content!: string;
    category!: string;
    author!: string;
    publishDate!: string;
    photoUrl!: string;
    postId!: number;

    constructor(item: Post) {
        Object.assign(this, item);
    }
}