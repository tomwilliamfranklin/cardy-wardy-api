import { User } from '../schemas/user';
import  jwt  from 'jsonwebtoken';

export function tokenVerify (req: any,res: any,next: any) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');
    try {
        const tokenSecret = process.env.TOKEN_SECRET ? process.env.TOKEN_SECRET : '';
        if(!tokenSecret)
            throw 'Token Secret Not Provided';

        const verified = jwt.verify(token, tokenSecret);

        req.user = verified;
        next();
    } catch(err) {
        res.status(400).send('Invalid Token');
    }

}
