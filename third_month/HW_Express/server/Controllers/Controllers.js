require('dotenv').config();
const sharp = require('sharp');
const mysql = require('mysql');
const { s3 } = require('../helpers/awsConfig');

class Controllers {
  constructor() {
    this.client = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: process.env.DB_PASSWORD,
      port: 3306,
      insecureAuth: true,
      options: { trustedConnection: true },
      database: process.env.DB
    });
  }
  connect = () => {
    this.client.connect((err) => {
      if (err) console.log(err);
      console.log('DB connected');
    });
  }

  getBooks = (req, res) => {
    const id = req.query.id;
    let queryAll = 'SELECT * FROM books';
    if (id) queryAll = `SELECT * FROM books WHERE id = ${id}`;
    console.log(id);
    try {
      const page = +req.query.page || 1;
      const range = page * 8;
      this.client.query(queryAll, (err, result) => {
        const newResult = result.filter((el, i) => {
          if (i >= range - 8 && i < range) {
            return el;
          }
        });
        const pageQuantity = Math.ceil(result.length / 8);
        this.#setResponse(res, 200, newResult, pageQuantity);
      });
    }
    catch (err) {
      this.#setResponse(res, 403, err);
    }
  }
  postBooks = async (req, res) => {
    try {
      const newField = req.body;
      const pathToImg = await this.imageUpload(req);
      const queryCreate = `INSERT INTO books (title, writeDate, author, bookDescr, image) VALUES ('${newField.title}', '${newField.writeDate}', '${newField.author}', '${newField.bookDescr}','${pathToImg}')`;
      this.client.query(queryCreate);
      this.#setResponse(res, 200, 'ok');
    } catch (err) {
      this.#setResponse(res, 403, err);
    }
  }
  updatebooks = (req, res) => {
    try {
      const newField = req.body;
      const userID = req.user.userId;
      const key = Object.keys(newField)[0];
      const queryUpdate = `UPDATE persons SET ${key} = '${newField[key]}' WHERE id = ${req.query.id}`;
      this.client.query(queryUpdate);
      const result = this.client.query(`SELECT * FROM persons WHERE id_user = '${userID}'`);
      this.#setResponse(res, 200, result);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  deleteBooks = (req, res) => {
    try {
      const queryDelete = `DELETE FROM persons WHERE id=${req.query.id} AND id_user = '${userID}'`;
      this.client.query(queryDelete);
      this.#setResponse(res, 200, 'success');
    } catch (err) {

      this.#setResponse(res, 403, err);;
    }
  }
  imageUpload = async (req) => {
    const myFile = req.file.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
    const size1 = await sharp(req.file.buffer).resize({ width: 200, height: 306 }).toBuffer();
    const paramsSize1 = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${new Date().getTime()}.${fileType}`,
      Body: size1
    };
    const result = await s3.upload(paramsSize1).promise();
    return result.Location;

  };

  #setResponse = (res, status, books, pages) => {
    return res.status(status).json({
      pages,
      books
    });
  }
}

module.exports = Controllers;



const imageUpload = async (req, size, name, s3) => {
  const myFile = req.file.originalname.split('.');
  const fileType = myFile[myFile.length - 1];
  try {
    const size1 = await sharp(req.file.buffer).resize({ width: size, height: size }).toBuffer();
    const paramsSize1 = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${name}-${new Date().getTime()}.${fileType}`,
      Body: size1
    };
    const result = await s3.upload(paramsSize1).promise();
    return result.Location;
  }
  catch (e) {
    console.log(e);
  }
};
