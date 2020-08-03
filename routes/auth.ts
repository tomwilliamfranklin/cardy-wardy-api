import express from 'express';
import { authRepository } from '../repositories/authRepository';
import { User } from '../schemas/user';

var authRoutes = express.Router();

authRoutes.post('/register', async function(req: any, res: any, next: any) {
    
    const response = await authRepository.postRegister(req, res);

    if(response)
        res.send(response);
});

authRoutes.post('/login', async function(req: any, res: any, next: any) {
    const response = await authRepository.postLogin(req, res);
    
    if(response)
        res.send(response);
});

export default authRoutes;
