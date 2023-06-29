import { ContactModel } from "../models/Contact";



export const createContact = async(request, response) => {
    const { email, message } = request.body

    try {
       const contact = await ContactModel.create({
        email,
        message
       }) 
        
       return response.status(201).json(contact)
    } catch (error) {
    return response.status(400).json(error) 
    }
}


export const allContacts = async(requeste, response) => {
     try {
        const contacts = await ContactModel.find().sort({createdAt: 'desc'});

        return response.status(200).json(contacts)
     } catch (error) {
         return response.status(400).json(error)
     }
}