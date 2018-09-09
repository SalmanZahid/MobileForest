var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    CONSTANTS = require('../../constants');

module.exports.Get = async (req, res) => {
    var options = {
        page: req.body.pageNumber, 
        limit: req.body.itemsPerPage || 20
    };

    try {
        var users = await User.paginate({}, options);
        return res.status(200).json({status: 200, data: users, message: "Succesfully Todos Recieved"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

module.exports.Update = (req, res) => {
   var user = new User({

   })
};

module.exports.Remove = (req, res) => {

};

module.exports.Create = async (req, res) => {
    var user = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        status: CONSTANTS.USER_STATUS.Active
    }
    console.log(user);

    try{   
        var createUser = await User.create(user);
        return res.status(201).json({status: 201, data: createUser, message: "Succesfully Created ToDo"})
    }catch(e){
        return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull "+ e.message})
    }

};