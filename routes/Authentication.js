const  express =  require('express');
const  router = express.Router();
const {Login , Register} = require('../controllers/Authentication')
router.route('/Login').post(Login)
router.route('/Register').post(Register)

module.exports = router