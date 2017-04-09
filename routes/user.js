'use strict'

var express = require('express');
var router = express.Router();
var controlUser = require('../controller/userController')

router.get('/', controlUser.getUsers);

router.get('/:name', controlUser.getOneUser);

router.post('/', controlUser.createUsers);

router.put('/', controlUser.updateUsers);

router.delete('/', controlUser.delUsers);

module.exports = router;