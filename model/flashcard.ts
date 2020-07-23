export class Flashcard {
        front: string;
        back: string;
        flipped: boolean;

        constructor(front: string, back: string, flipped: boolean) {
                this.front = front;
                this.back = back;
                this.flipped = flipped;
        }
}