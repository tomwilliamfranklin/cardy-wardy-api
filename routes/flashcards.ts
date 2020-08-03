import express from 'express';
import { flashcardsRepository } from '../repositories/flashcardsRepository';
var flashcardsRoutes = express.Router();

flashcardsRoutes.get('/', async function(req: any, res: any, next: any) {
    res.send(await flashcardsRepository.getFlashcards());
});

flashcardsRoutes.post('/deck', async function(req: any, res: any, next: any) {  
    const response = await flashcardsRepository.saveFlashcardDeck(req.body);

    if(response)
        res.send({type: 'POST', error: false, responseMessage: 'Successfully saved FlashcardDeck.', createdUser: req.body.id});
    else
        res.status(400).send({type: 'POST', error: true, responseMessage: 'Error creating FlashcardDeck. Please try again later.'});
});

export default flashcardsRoutes;
