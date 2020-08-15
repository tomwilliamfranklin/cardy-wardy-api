import { usersController } from '../controllers/userController'

export module usersRepository {
    export const getUsers = async () => {
        try {   
            let i = await usersController.getUsersData();

            return i;
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