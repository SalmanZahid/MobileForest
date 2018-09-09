var mongoose = require('mongoose');
var enums = require('../constants');

var expenseSchema = new mongoose.Schema({
    expenseDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: 'Please provide description'
    },
    amount: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        enum: Object.keys(enums.BRANCH)
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

mongoose.model('Expense', expenseSchema);