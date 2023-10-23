const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title :{
        type : String , 
        required : [true , 'please provide title']
    },
    location :{
        type : String , 
        required : [true , 'please provide location']
    },
    Date :{
        type : String , 
        required : [true , 'please provide Date']
    },
    info :{
        type : String , 
        required : [true , 'please provide info']
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'UserSchema' ,
        required: [true, 'Please provide user'],
    }
})
module.exports = mongoose.model('EventSchema',EventSchema)