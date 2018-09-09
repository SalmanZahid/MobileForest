var mongoose = require('mongoose');
var enums = require('../constants');

var saleSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: 'Name is required',
        maxlength: 50
    },
    quantity: {
        type: Number,
        required: 'Please provide quantity',
    },
    modelNumber: {
        type: String,
        required: 'Please provide model number'
    },
    paymentMode: {
        type: String,
        required: 'Payment Mode is required',
        enum: Object.keys(enums.PAYMENT_MODE)
    },
    amount: {
        type: Number,
        required: 'Please provide amount'
    },
    loss: Number,
    claimIn: Number,
    claimOut: Number,
    percentage: Number,
    soldAt: {
        type: Date,
        required: 'Please provide sold date'
    },
    branch: {
        type: String,
        enum: Object.keys(enums.BRANCH)
    },
    status: {
        type: String,
        enum: Object.keys(enums.STATUS),
        default: ''
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

mongoose.model('Sale', saleSchema);