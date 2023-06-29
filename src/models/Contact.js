import { Schema, model } from 'mongoose';


const ContactSchema = new Schema({
   email: {
    type: String,
    required: true,
    lowercase: true
   },

   message: {
    type: String,
    required: true
   }
}, {timestamps: true})


export const ContactModel = model('contact', ContactSchema)