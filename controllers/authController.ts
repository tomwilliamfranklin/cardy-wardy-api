import { User } from "../schemas/user";

export module authController {
    export const postRegister = async (request: any) => {
        try {   
            const user = new User({
                firstName: request.firstName,
                secondName: request.secondName,
                fullName: request.firstName + " " + request.secondName,
                email: request.email,
                password: request.password,
                caption: request.caption,
                emote: request.emote,
                dateCreated: request.dateCreated,
            });
            
            const savedUser = await user.save();

            return savedUser;
        } catch (error) {
                console.log(error);
            return false;
        } 
    };

    export const postLogin = async (request: any) => {
        try {   

            return "hello world";
        } catch (error) {
                console.log(error);
            return false;
        } 
    };
}