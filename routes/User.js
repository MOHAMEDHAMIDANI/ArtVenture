const  express =  require('express');
const  router = express.Router();
const GetSingleUser = require('../controllers/User')
router.route('/').get(GetSingleUser)
router.route('/:id').get()

module.exports = router