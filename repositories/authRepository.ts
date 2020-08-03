import { authController } from '../controllers/authController'
import { validateUser, validateLogin } from '../validation';
import { User } from '../schemas/user';
import bcrypt from 'bcryptjs';

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
            // ? Validate data of user.
            const validation: any = validateLogin(req.body);

            if(validation.error) {
                res.status(400).send(validation.error?.details[0].message);
                return;
            }

            // ? Hash password
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);

           return await authController.postLogin(req.body);
        } catch (error) {
                console.log(error);
            return false;
        }
    };
}
