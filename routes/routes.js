
const express = require('express');
const controller = require('../controller/translator-controller');



const router = express.Router();

router.post('/translate', controller.translate);

module.exports = router;