import express from 'express';
import { usersRepository } from '../repositories/usersRepository';

const usersRoutes = express.Router();

usersRoutes.get('/', async function(req: any, res: any, next: any) {
   res.send(await usersRepository.getUsers());
});       

usersRoutes.post('/user', async function(req: any, res: any, next: any) {
   const response = await usersRepository.saveUser(req.body);
   
   if(response)
      res.send({type: 'POST', error: false, responseMessage: 'Successfully saved User.', createdUser: req.body.id});
   else
      res.send({type: 'POST', error: true, responseMessage: 'Error creating User. Please try again later.'});
});    

usersRoutes.put('/user/:id', async function(req: any, res: any, next: any) {
   res.send(await usersRepository.getUsers());
});    

usersRoutes.delete('/user/:id', async function(req: any, res: any, next: any) {
   res.send(await usersRepository.getUsers());
});    

export default usersRoutes;