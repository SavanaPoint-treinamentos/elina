import { Router } from 'express';
import { allContacts, createContact } from '../controllers/contactController';


const router = Router();

router.post('/create-contact', createContact)
router.get('/contacts', allContacts)

export { router }