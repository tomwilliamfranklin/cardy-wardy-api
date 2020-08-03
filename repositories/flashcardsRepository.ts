import { flashcardController } from '../controllers/flashcardController'
import { IFlashcardDeck } from '../schemas/flashcardDeck';

export module flashcardsRepository {
    export const getFlashcards = async () => {
        try {   
            return await flashcardController.getFlashcardsData();
        } catch (error) {
                console.log(error);
            return false;
        }
    };

    export const saveFlashcardDeck = async (deck: IFlashcardDeck) => {
        try {
            const e = await flashcardController.saveFlashcardDeckData(deck);
            
            return e;
        } catch (error) {

        }
    }
}
