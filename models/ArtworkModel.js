const mongoose = require('mongoose')

const ArtSchema = new mongoose.Schema({
    title :{
        type : String , 
        required : [true , 'please provide title']
    },
    price :{
        type : String , 
        required : [true , 'please provide price']
    },
    info :{
        type : String , 
        required : [true , 'please provide info']
    },
})
module.exports = mongoose.model('ArtSchema',ArtSchema)