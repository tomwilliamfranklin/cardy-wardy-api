import express from 'express';
import { usersRepository } from '../repositories/usersRepository';

const router = express.Router();

const userRouter =  router.get('/', async function(req: any, res: any, next: any) {
   res.send(await usersRepository.getUsers());
});       

export default { userRouter };