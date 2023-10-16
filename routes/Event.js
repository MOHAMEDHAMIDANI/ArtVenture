const  express =  require('express');
const  router = express.Router();
const {
    CreateEventArtWork,
    GetAllEventArtWork,
    GetAllEventArtWorkByUser,
    GetSingleEventArtWork,
    UpdateEventArtWork,
    DeleteEventArtWork,
} = require('../controllers/Event')
router.route('/').get(GetAllEventArtWorkByUser).get(GetAllEventArtWork).post(CreateEventArtWork).patch(UpdateEventArtWork).delete(DeleteEventArtWork)
router.route('/:id').get(GetSingleEventArtWork)
