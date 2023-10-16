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

router.route('/').get(GetAllArtWork).get(GetAllArtWorkByUser).post(CreateArtWork).patch(UpdateArtWork).delete(DeleteArtWork)
router.route('/:id').get(GetSingleArtWork)