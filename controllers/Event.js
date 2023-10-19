const { StatusCodes } = require('http-status-codes');
const {BadRequestError } = require('../errors/index')
const {NotFoundError } = require('../errors/index')
const EventSchema = require('../models/EventsModel')
const CreateEventArtWork = async(req,res ) => {
    req.body.createdBy = req.user.userId
    const event  = await EventSchema.create(req.body)
    res.status(StatusCodes.CREATED).json({event})
}
const GetAllEventArtWork = async(req,res ) => {
    const events = await EventSchema.find({})
    if(!events){
        throw new NotFoundError('no events found ')
    }
    res.status(StatusCodes.OK).json({events})
}
const GetAllEventArtWorkByUser = async(req,res ) => {
    const userId = req.user.userId
    const events = await EventSchema.find({createdBy : userId})
    if(!events){
        throw new NotFoundError('no events found by this user')
    }
    res.status(StatusCodes.OK).json({events})
}
const GetSingleEventArtWork = async(req,res ) => {
    const {
        params : {id:eventId}
    } = req
    const singleEvent = await EventSchema.find({_id : eventId})
    if(!singleEvent){
        throw new NotFoundError(` no events found by this id = ${eventId} `)
    }
    res.status(StatusCodes.OK).json({singleEvent})
}
const UpdateEventArtWork = async(req,res ) => {
    const {
        params : {id:eventId} , 
        user : {userId:id}
    } = req
    const event = await EventSchema.findByIdAndUpdate({_id : eventId ,createdBy : id , ...req.body} , {new : true , runValidators: true })
    if(!event){
        throw new NotFoundError(` no events found by this id = ${eventId} `)
        return
    }
    res.status(StatusCodes.OK).json({event})
}
const DeleteEventArtWork = async(req,res ) => {
    const {
        params : {id:eventId} , 
        user : {userId:id}
    } = req
    const event = await EventSchema.findByIdAndDelete({_id : eventId , createdBy : id})
    res.status(StatusCodes.OK).json({msg : 'event  deleted successfully'})
}
module.exports = {
    CreateEventArtWork,
    GetAllEventArtWork,
    GetAllEventArtWorkByUser,
    GetSingleEventArtWork,
    UpdateEventArtWork,
    DeleteEventArtWork,
}