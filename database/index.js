var mongoose = require('mongoose');
var dbConfig = require('../config');
var bluebird = require('bluebird');

console.log(dbConfig.database.host);

mongoose.Promise = bluebird;
mongoose.connect(dbConfig.database.host)
        .then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : `+ dbConfig.database.host)})
        .catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : `+ + dbConfig.database.host)});

require("../models/user");
require("../models/inventory");
require("../models/expense");
require("../models/sale");