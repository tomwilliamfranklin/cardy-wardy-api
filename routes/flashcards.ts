import express from 'express';
import { flashcardsRepository } from '../repositories/flashcardsRepository';
var router = express.Router();

const flashcardsIndex = router.get('/', async function(req: any, res: any, next: any) {
    res.send(await flashcardsRepository.getFlashcards());
});

export default { flashcardsIndex };
