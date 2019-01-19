const router = require('express').Router();
const userControllers = require('../controllers/user');

router.get('/', userControllers.home);
router.get('/setup', userControllers.setup);

module.exports = router;