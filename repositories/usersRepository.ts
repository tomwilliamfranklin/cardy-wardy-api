import { usersController } from '../controllers/userController'

export module usersRepository {
    export const getUsers = async () => {
        try {   
            return await usersController.getUsersData();
        } catch (error) {
                console.log(error);
            return false;
        }
    };

    export const saveUser = async (usersData: any) => {
        try {   
            return await usersController.saveUser(usersData);
        } catch (error) {
                console.log(error);
            return false;
        }
    };
}