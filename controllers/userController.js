export const getUsersData = async () => {
    try {   
        // TODO hardcoded data 
        const users = [{
            id: 1,
            firstName: 'Tom',
            secondName: 'Franklin',
            fullName: 'Tom Franklin',
            dateOfBirth: new Date(),
            email: 'somemadeupEmail@tomfranklinnnnnnnn.com',
            caption: 'maybe ill add a caption feature?',
            emote: 'maybe ill add an emote feature?',
        },
        {
            id: 2,
            firstName: 'Billy',
            secondName: 'McBillyFace',
            fullName: 'Billy McBillyFace',
            dateOfBirth: new Date(),
            email: 'McBillyFaceEmail@tomfranklinnnnnnnn.com',
            caption: 'maybe ill add a caption feature?',
            emote: 'maybe ill add an emote feature?',
        }];

        return users;
    } catch (error) {
            console.log(error);
        return false;
    }
};