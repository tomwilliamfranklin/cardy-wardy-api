import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document { 
    firstName: string;
    secondName: string;
    fullName: string;
    email: string;
    password: string;
    caption: string;
    emote: string;
    dateCreated: Date;
}

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'first name field is required.'],
        max: 255
    },
    secondName: {
        type: String,
        required: [true, 'second name field is required.'],
        max: 255,
    },
    fullName: {
        type: String,
        required: [true, 'full name failed to generate. Please contact admins'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        max: 255,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6,
    },
    caption: {
        type: String,
    },
    emote: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
});

export const User = mongoose.model<IUser>('user', userSchema);

