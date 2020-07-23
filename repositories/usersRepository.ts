import { getUsersData } from '../controllers/userController'

export module usersRepository {
    export const getUsers = async () => {
        try {   
            return await getUsersData();
        } catch (error) {
                console.log(error);
            return false;
        }
    };
}