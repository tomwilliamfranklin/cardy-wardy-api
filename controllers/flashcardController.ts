import { Flashcard }  from '../model/flashcard';
import { FlashcardDeck } from '../model/flashcard-deck';
import { User } from '../model/user';

export const getFlashcardsData = async () => {
    try {   
        // TODO hardcoded data 
        const flashcards = [
            new FlashcardDeck('Types of Keyboards', 'something', new Date(), new Date(), true, new User(1, 'Tom', 'Franklin', 'Tom Franklin', new Date(), 'somemadeupEmail@tomfranklinnn.com', 'maybe add this', 'maybe add this'),
                 [new Flashcard('some keyboard question', 'congrats', false), new Flashcard('second question', 'hello', false)]),
            new FlashcardDeck('Types of Trees', 'something', new Date(), new Date(), true, new User(1, 'Tom', 'Franklin', 'Tom Franklin', new Date(), 'somemadeupEmail@tomfranklinnn.com', 'maybe add this', 'maybe add this'),
                 [new Flashcard('some tree question', 'congrats', false), new Flashcard('second question', 'hello', false)]),
        ];
        return flashcards;
    } catch (error) {
            console.log(error);
        return false;
    } 
};