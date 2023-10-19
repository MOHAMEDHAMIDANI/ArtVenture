
const express = require('express');
const  router = express.Router();
const {
    CreateEventArtWork,
    GetAllEventArtWork,
    GetAllEventArtWorkByUser,
    GetSingleEventArtWork,
    UpdateEventArtWork,
    DeleteEventArtWork,
} = require('../controllers/Event')
router.route('/').get(GetAllEventArtWork).post(CreateEventArtWork)
router.route('/user').get(GetAllEventArtWorkByUser)
router.route('/:id').get(GetSingleEventArtWork).patch(UpdateEventArtWork).delete(DeleteEventArtWork)
module.exports = router;