require('dotenv').config();
const AWS = require('aws-sdk');
const multer = require('multer');

const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, '');
  }
});
exports.upload = multer({ storage }).single('image');

exports.s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});