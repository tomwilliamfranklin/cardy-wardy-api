import express from 'express';
import { usersRepository } from '../repositories/usersRepository';

const usersRoutes = express.Router();

usersRoutes.get('/', async function(req: any, res: any, next: any) {
   res.send(await usersRepository.getUsers());
});       

usersRoutes.post('/user', async function(req: any, res: any, next: any) {
   console.log(req.body)
   const response = await usersRepository.saveUser(req.body);
   
   if(response)
      res.send({type: 'POST', createdUser: req.body.id})

   

   res.send();
});    

usersRoutes.put('/user/:id', async function(req: any, res: any, next: any) {
   res.send(await usersRepository.getUsers());
});    

usersRoutes.delete('/user/:id', async function(req: any, res: any, next: any) {
   res.send(await usersRepository.getUsers());
});    

export default usersRoutes;