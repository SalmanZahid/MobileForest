var mongoose = require('mongoose');
var enums = require('../constants');

var inventorySchema = new mongoose.Schema({
    model: {
        type: String,
        required: 'Model is required',
        maxlength: 50
    },
    quantity: {
        type: Number,
        required: 'Quantity is required',
    },
    branch: {
        type: String,
        enum: Object.keys(enums.BRANCH),
        required: 'Password in required'
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: Object.keys(enums.STATUS),
        default: enums.STATUS.Active
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date
    }
});

mongoose.model('Inventory', inventorySchema);