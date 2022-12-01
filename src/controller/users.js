const UserModels = require('../models/users');
const getAllUsers = async(req, res) => {
    try {
        const [data]=await UserModels.getAllUsers();
        res.json({
            message: 'GET all users success',
            data: data
        })  
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,// untuk mengetahui error yg terjadi 
        })
    }
}
const  createNewUser = async(req, res) => { 
    const{body} = req;
    try {
        await UserModels.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,// untuk mengetahui error yg terjadi 
        })   
    }
}
const updateUser = async(req, res) => {
    const {id} =req.params;
    const {body} =req;
    try {
        await UserModels.updateUser(body, id);
        res.json({
            message: 'UPDATE user success',
            data:   {
                id: id,
                ...body}
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,// untuk mengetahui error yg terjadi 
        })    
    }
}
const deleteUser = async (req, res) => {
    const {id} =req.params;
    try {
        await UserModels.deleteUser(id);
        res.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,// untuk mengetahui error yg terjadi 
        })    
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}