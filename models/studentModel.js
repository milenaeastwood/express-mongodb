import {Schema, model} from 'mongoose';

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: 'Email is required',
        trim: true,
        unique: true,
        lowercase: true,
    },
});

export const Student = model('Student', studentSchema);