const  express =  require('express');
const  router = express.Router();
const {Login , Register} = require('../controllers/Authentication');
const { uploadImage }  = require('../controllers/Uploading');
router.route('/Login').post(Login);
router.route('/Register').post(Register);
router.route('/upload').post(uploadImage);


module.exports = router