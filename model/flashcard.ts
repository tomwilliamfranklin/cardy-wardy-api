export class Flashcard {
        front: string;
        back: string;
        flipped: boolean;
        author: string;
        authorAvatar: string;

        constructor(front: string, back: string, flipped: boolean, author: string, authorAvatar: string) {
                this.front = front;
                this.back = back;
                this.flipped = flipped;
                this.author = author;
                this.authorAvatar = authorAvatar;
        }
}