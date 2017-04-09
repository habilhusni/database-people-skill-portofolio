'use strict'

var express = require('express');
var router = express.Router();
var controlSkill = require('../controller/skillController')

router.get('/', controlSkill.getSkills);

router.get('/:name_skill', controlSkill.getOneSkill);

router.post('/', controlSkill.createSkills);

router.put('/', controlSkill.updateSkills);

router.delete('/', controlSkill.delSkills);

module.exports = router;