const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const usersController = require('../controllers/iniciar.controller');

router.get('/iniciar-sesion', usersController.get_login);
router.post('/iniciar-sesion', usersController.post_login);

module.exports = router;
