const { StatusCodes } = require('http-status-codes');
const {BadRequestError } = require('../errors/index')
const {NotFoundError } = require('../errors/index')
const ArtSchema  = require('../models/ArtworkModel.js')
const CreateArtWork = async(req,res ) => {
    req.body.createdBy = req.user.userId
    const art = await ArtSchema.create(req.body)
    res.status(StatusCodes.OK).json({art})
}
const GetAllArtWork = async(req,res ) => {
    const arts = await ArtSchema.find({})
    res.status(StatusCodes.OK).json({arts})
}
const GetAllArtWorkByUser = async(req,res ) => {
    const {user : {userId  : id}} = req
    const arts = await ArtSchema.find({createdBy : id})
    res.status(StatusCodes.OK).json({arts})

}
const GetSingleArtWork = async(req,res ) => {
    const {user : {userId  : id} , 
        params : {id : artId}
        } = req
    const arts = await ArtSchema.find({_id : artId , createdBy : id })
    res.status(StatusCodes.OK).json({arts})
}
const UpdateArtWork = async(req,res ) => {
    const {
        params : {id:artId} , 
        user : {userId:id}
    } = req
    const art = await ArtSchema.findByIdAndUpdate({_id : artId ,createdBy : id , ...req.body} , {new : true , runValidators: true })
    if(!art){
        throw new NotFoundError(` no art found by this id = ${artId} `)
    }
    res.status(StatusCodes.OK).json({art})
}
const DeleteArtWork = async(req,res ) => {
    const {
        params : {id:artId} , 
        user : {userId:id}
    } = req
    const Art = await ArtSchema.findByIdAndDelete({_id : artId , createdBy : id})
    res.status(StatusCodes.OK).json({msg : 'Art  deleted successfully'})
}
const  uploadPhotos = async (req,res) => {

}
module.exports = {
    CreateArtWork,
    GetAllArtWork,
    GetAllArtWorkByUser,
    GetSingleArtWork,
    UpdateArtWork,
    DeleteArtWork,
}