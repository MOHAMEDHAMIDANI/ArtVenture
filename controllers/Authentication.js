const UserSchema = require('../models/UserModel')
const { BadRequestError, UnauthenticatedError } = require('../errors/index')
const Register = async (req, res) => {
    const user = await UserSchema.create({ ...req.body });
    const token = user.getToken()
    res.status(200).json({ user: { username: user.username }, token })
}
const Login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError('Please  Provide a valid Email and Password')
    }
    const user = await UserSchema.findOne({ email });
    if (!user) {
        throw new UnauthenticatedError('im sorry this user doesn\'t exist')
    }
    const isPass = await user.comparePassword(password)
    if (!isPass) {
        throw new UnauthenticatedError('Wrong Password Please Signup Or Try Again Later')
    }
    const token = user.getToken()
    res.status(200).json({ user: { username: user.username }, token })
}

module.exports = { Login, Register, }
