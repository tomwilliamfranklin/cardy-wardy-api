import { Flashcard } from "./flashcard";
import { User } from "./user";

export class FlashcardDeck { 
    title: string;
    description: string;
    dateCreated: Date;
    dateLastUpdated:  Date;
    published: boolean;
    author: User;
    flashcards: Flashcard[];
    
    constructor(title: string, description: string, dateCreated: Date, dateLastUpdated: Date, published: boolean, author: User, flashcards: Flashcard[]) {
        this.title = title;
        this.description = description;
        this.dateCreated = dateCreated;
        this.dateLastUpdated = dateLastUpdated;
        this.published = published;
        this.author = author;
        this.flashcards = flashcards;
    }
}