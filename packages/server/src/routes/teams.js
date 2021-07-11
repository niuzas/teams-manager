const Router = require('express').Router;
const teamController = require('../controllers/team-controller');
const router = new Router();
// const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/create', authMiddleware, teamController.create);
router.post('/vote', authMiddleware, teamController.vote);
router.get('/', authMiddleware, teamController.getTeams);

module.exports = router;
