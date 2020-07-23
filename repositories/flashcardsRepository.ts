import { getFlashcardsData } from '../controllers/flashcardController'

export module flashcardsRepository {
    export const getFlashcards = async () => {
        try {   
            return await getFlashcardsData();
        } catch (error) {
                console.log(error);
            return false;
        }
    };
}