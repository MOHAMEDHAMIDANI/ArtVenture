const  express =  require('express');
const  router = express.Router();
const {
    CreateArtWork,
    GetAllArtWork,
    GetAllArtWorkByUser,
    GetSingleArtWork,
    UpdateArtWork,
    DeleteArtWork,
} = require('../controllers/Artwork')

router.route('/').get(GetAllArtWork).post(CreateArtWork)
router.route('/userArtwork').get(GetAllArtWorkByUser)
router.route('/:id').get(GetSingleArtWork).patch(UpdateArtWork).delete(DeleteArtWork)
module.exports = router