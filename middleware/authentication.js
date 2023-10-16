const Jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors/index')
const authMiddleware = async ( req , res , next) =>{
    const {auth} = req.headers.authorization ;
    if(!auth  , !auth.startsWith('Bearer')){
        throw new UnauthenticatedError('invalid authorization')
    }
    try {
        const token = Jwt.verify(auth.split(' ')[1] , process.env.JWT_Secret)
        req.user = {userId : token._id , username : token.username}
        next()
    } catch (error) {
    throw new UnauthenticatedError('Authentication invalid')
    }
}

module.exports = authMiddleware