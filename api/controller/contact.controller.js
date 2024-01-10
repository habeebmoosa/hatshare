import { ContactModel } from "../model/contact.model.js";

export const sendContact = async (req, res) => {
    try {
        const { name, email, msg} = req.body;
        const contact = new ContactModel({
            name,
            email,
            msg,
        });

        await contact.save();
        res.status(200).json({ message: 'Contact saved successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
};