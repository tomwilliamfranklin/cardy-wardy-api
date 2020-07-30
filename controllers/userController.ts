import { User } from "../schemas/user";

export module usersController {
    export const getUsersData = async () => {
        try {   
           return await User.find({}).then((users) => {
                return users;
            });
        } catch (error) {
                console.log(error);
            return false;
        } 
    };

    export const saveUser = async (userData: any) => {
        try {
            const user = new User(userData);
            user.save().then((user) => {
                return user;
            });
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}