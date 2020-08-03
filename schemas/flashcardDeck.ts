import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user';

export interface IFlashcardDeck extends Document { 
    title: string;
    description: string;
    dateCreated: Date;
    dateLastUpdated:  Date;
    published: boolean;
    author: number;
    flashcards: [{ //ToDo Make flashcards into their own
        front: string;
        back: string;
        flipped: boolean;
    }];
}

const flashcardDeckSchema = new Schema({
    title: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    description: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    dateCreated: {
        type: Date,
        required: [true, 'first name field is required.'],
    },
    dateLastUpdated: {
        type: Date,
        required: [true, 'first name field is required.'],
    },
    published: {
        type: Boolean,
        required: [true, 'first name field is required.'],
    },
    author: [{ type: Schema.Types.ObjectId, ref: 'user'}],
    flashcards: [{
        front: String,
        back: String,
        flipped: Boolean,
    }],
});

export const FlashcardDeck = mongoose.model<IFlashcardDeck>('FlashcardDeck', flashcardDeckSchema);

