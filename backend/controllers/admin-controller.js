const User=require("../models/user-model")
const Contact = require("../models/contact-model")

const getAllUsers=async (req, res)=>{
    try {
        const user= await User.find({}, {password:0});
        if(!user || user.length === 0){
            return res.status(404).json({message: "user not found"});
        }
        return res.status(200).json(user);
    } 
    catch (error) {
        next(error); 
    }
}
const getAllContacts=async (req, res)=>{
    try {
        const contact= await Contact.find();
        if(!contact || contact.length === 0){
            return res.status(404).json({message: "contacts not found"});
        }
        return res.status(200).json(contact);
    } 
    catch (error) {
        next(error);
    }
}

const deleteUserById = async(req, res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id})
        return res.status(200).json({message:"User deleted successfully"})
    } catch (error) {
        next(error)
    }
}

const deleteContactById = async(req, res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id: id})
        return res.status(200).json({message:"Contact deleted successfully"})
    } catch (error) {
        next(error)
    }
}

//single user data
const getUserById = async(req, res)=>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id: id}, {password:0})
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

const updateUserById = async(req, res)=>{
    try {
        const id = req.params.id;
        const updateUserData = req.body;
        const updatedData = await User.updateOne({_id: id}, {
            $set: updateUserData,
        })
        return res.status(200).json(updatedData)
    } catch (error) {
        next(error)
    }
}
module.exports={getAllUsers, getAllContacts, deleteUserById, updateUserById, getUserById, deleteContactById};