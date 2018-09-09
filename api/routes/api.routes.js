var express = require('express')

var router = express.Router();
var users = require('../controller/user.controller');


router.get('/users', users.Get);
router.post('/users', users.Create);
router.put('/users/:id/update', users.Update);
router.delete('/users/:id', users.Remove);



module.exports = router;