import { User } from "../schemas/user";

export module usersController {
    export const getUsersData = async () => {
        try {   

            return null;
        } catch (error) {
                console.log(error);
            return false;
        } 
    };

    export const saveUser = async (userData: any) => {
        try {
            const user = new User(userData);
            user.save();

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}