import express from 'express';
import { flashcardsRepository } from '../repositories/flashcardsRepository';
var flashcardsRoutes = express.Router();

flashcardsRoutes.get('/', async function(req: any, res: any, next: any) {
    res.send(await flashcardsRepository.getFlashcards());
});

export default flashcardsRoutes;
