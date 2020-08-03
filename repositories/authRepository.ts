import { authController } from '../controllers/authController'
import { validateUser, validateLogin } from '../validation';
import { User } from '../schemas/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export module authRepository {
    export const postRegister = async (req: any, res: any) => {
        try {   

            // ? Validate data of user.
            const validation: any = validateUser(req.body);

            if(validation.error) {
                res.status(400).send(validation.error?.details[0].message);
                return;
            }

            // ? Check if user already exists in database
            const emailExists = await User.findOne({email: req.body.email});

            if(emailExists) {
                res.status(400).send('Email already exists.');
                return;
            }

            // ? Hash password
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);

           return await authController.postRegister(req.body);
        } catch (error) {
                console.log(error);
            return false;
        }
    };

    export const postLogin = async (req: any, res: any) => {
        try {   
            // ? Check if User actually exists. 
            // Also getting user object to use for comparing password later.
            const user = await User.findOne({email: req.body.email});

            if(!user) {
                res.status(400).send('Email is not assigned to an account.');
                return;
            }

            // ? Validate data of user.
            const validation: any = validateLogin(req.body);

            if(validation.error) {
                res.status(400).send(validation.error?.details[0].message);
                return;
            }

            // ? Check password is valid.
            const validPassword = await bcrypt.compare(req.body.password, user.password);

            if(!validPassword) {
                res.status(400).send('Invalid password');
                return;
            }
        
            // ? Assign Token
            const tokenSecret = process.env.TOKEN_SECRET ? process.env.TOKEN_SECRET : '';

            if(!tokenSecret)
                throw 'Token Secret was not provided in env variables.';

            const token = jwt.sign({_id: user._id}, tokenSecret);

            res.header('auth-token', token);

                return 'Logged in';
        } catch (error) {
                console.log(error);
            return false;
        }
    };
}
