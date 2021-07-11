const Router = require('express').Router;
const teamController = require('../controllers/team-controller');
const router = new Router();
// const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/create', authMiddleware, teamController.create);
router.post('/voteplus', authMiddleware, teamController.votePlus);
router.post('/voteminus', authMiddleware, teamController.voteMinus);
router.get('/', authMiddleware, teamController.getTeams);

module.exports = router;
