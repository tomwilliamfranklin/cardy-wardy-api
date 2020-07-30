import mongoose, { Schema, Document } from 'mongoose';

export interface IFlashcard extends Document { 
    front: string;
    back: string;
    flipped: boolean;
}

const flashcardSchema = new Schema({
    front: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    back: {
        type: String,
        required: [true, 'first name field is required.'],
    },
    flipped: {
        type: Boolean,
        required: [true, 'first name field is required.'],
    },
});

export const Flashcard = mongoose.model<IFlashcard>('flashcard', flashcardSchema);

