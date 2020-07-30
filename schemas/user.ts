import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document { 
    front: string;
    back: string;
    flipped: boolean;
}

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    secondName: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    fullName: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'first name field is required.'],
    },
    email: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    caption: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    emote: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    avatar: {
        type: String,
        required: [true, 'first name field is required.'],
    },
});

export const User = mongoose.model<IUser>('user', userSchema);

