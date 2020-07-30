

import { FlashcardDeck, IFlashcardDeck } from '../schemas/flashcardDeck';
import { Flashcard } from '../schemas/flashcard';
export module flashcardController {
    export const getFlashcardsData = async () => {
        try {   
            // TODO hardcoded data 
             return await FlashcardDeck.find({}).then((flashcardDecks) => {
                 console.log(flashcardDecks);
                return flashcardDecks;
            });
            
        } catch (error) {
                console.log(error);
            return false;
        } 
    };


    export const saveFlashcardData = async () => {
        try {

        } catch (error) {
            console.log(error);
            return false;
        }
    }


    export const saveFlashcardDeckData = async (deck: IFlashcardDeck) => {
        try {
            const newDeck = new FlashcardDeck(deck);
            return await newDeck.save().then((data) => {
                return data;
            });
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}