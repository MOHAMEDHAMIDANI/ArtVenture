const cloudinary = require('cloudinary').v2;
const { StatusCodes } =  require('http-status-codes')
cloudinary.config({
    cloud_name: 'dtvwgsrqr',
    api_key: '854698854765137',
    api_secret: 'q7BdBqlIhpTL8rzjeI8r7RDTTyM'
});
const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
};

const uploadImage = async (req, res) => {
    const result = await cloudinary.v2.uploader.upload(
        req.file.buffer,
        {
            use_filename: true,
            folder: 'file-upload',
        }
    );                             
    return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = {
    uploadImage
}
