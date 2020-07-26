import { User }  from '../model/user';

export const getUsersData = async () => {
    try {   
        // TODO hardcoded data 
        const users = [new User(1, 'Tom', 'Franklin', 'Tom Franklin', new Date(), 'somemadeupEmail@tomfranklinnn.com', 'maybe add this', 'maybe add this'),
        new User(2, 'Billy', 'McBillyFace', 'Billy McBillyFace', new Date(), 'somemadeupEmail@tomfranklinnn.com', 'maybe add this', 'maybe add this')];

        return users;
    } catch (error) {
            console.log(error);
        return false;
    } 
};
