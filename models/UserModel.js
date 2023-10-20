const mongoose = require('mongoose');
const Jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please Provide a Username'],
        minlength: 6,
        maxlength: 15,
        unique: true,
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        required: [true, 'Please Provide an Email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please Provide a Password'],
        minlength: 6,
    },
    avatar : {
        type : String,
    },
    Bio : {
        type : String,
    },
})
UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})
UserSchema.methods.getToken = function () {
    return Jwt.sign({ userId: this._id, username: this.username }, process.env.JWT_Secret, { expiresIn: '30d' })
}
UserSchema.methods.addFav = function (id) {
    this.favoriteArt.push(id)
}
UserSchema.methods.comparePassword = async function (password) {
    const match = await bcrypt.compare(password, this.password);
    return match
}
module.exports = mongoose.model('UserSchema', UserSchema);