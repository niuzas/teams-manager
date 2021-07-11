const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
// const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');


router.get('/', authMiddleware, userController.getUsers);

module.exports = router;
