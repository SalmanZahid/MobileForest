var mongoose = require('mongoose');
var enums = require('../constants');
var mongoosePaginate = require('mongoose-paginate');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required',
        maxlength: 50
    },
    username: {
        type: String,
        required: 'Username is required',
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: 'Password in required'
    },
    role: {
        type: String
    },
    status: {
        type: String,
        enum: Object.keys(enums.USER_STATUS),
        default: enums.USER_STATUS.Active
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

userSchema.plugin(mongoosePaginate)
mongoose.model('User', userSchema);