import Joi from '@hapi/joi';

// Validation Schemas for incoming data. 

export const validateUser = (userData: any) => {
    try {   
        const userValidationSchema = Joi.object({
            firstName: Joi.string().max(255).required(),
            secondName: Joi.string().max(255).required(),
            email: Joi.string().max(255).required().email(),
            password: Joi.string().required().max(1024).min(6),
            caption: Joi.string(),
            emote: Joi.string(),
            dateCreated: Joi.date(),
        });

        const validation =  userValidationSchema.validate(userData);

        return validation;
    } catch (error) {
            console.log(error);
        return false;
    }
};

export const validateLogin = (userData: any) => {
    try {   
        const userValidationSchema = Joi.object({
            email: Joi.string().max(255).required().email(),
            password: Joi.string().required().max(1024).min(6),
        });

        const validation =  userValidationSchema.validate(userData);

        return validation;
    } catch (error) {
            console.log(error);
        return false;
    }
};
