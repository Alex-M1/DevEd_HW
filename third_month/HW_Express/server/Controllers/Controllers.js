require('dotenv').config();
const mysql = require('mysql');

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
    const queryAll = 'SELECT * FROM books';
    try {
      this.client.query(queryAll, (err, result) => {
        if (req.query.sort || req.query.sort !== 'id') {
          result.sort((a, b) => a[req.query.sort] > b[req.query.sort] ? 1 : -1);
        }
        this.#setResponse(res, 200, result);
      });
    }
    catch (err) {
      this.#setResponse(res, 403, err);
    }
  }
  postBooks = (req, res) => {
    try {
      const newField = req.body;
      const queryCreate = `INSERT INTO persons (id_user, firstName, lastName, age, city, phone, email, company) VALUES ('${userID}', '${newField.firstName}', '${newField.lastName}', ${newField.age}, '${newField.city}','${newField.phone}', '${newField.email}', '${newField.company}')`;
      this.client.query(queryCreate);
    } catch (err) {
      this.#setResponse(res, 403, err);
    }
  }
  updatebooks = (req, res) => {
    try {
      if (req.query.id === 'all') {
        return this.clearAll(req, res);
      }
      const queryDelete = `DELETE FROM persons WHERE id=${req.query.id} AND id_user = '${userID}'`;
      this.client.query(queryDelete);
      this.#setResponse(res, 200, 'success');
    } catch (err) {
      this.#setResponse(res, 403, err);;
    }
  }
  deleteBooks = (req, res) => {
    try {
      const newField = req.body;
      const userID = req.user.userId;
      const key = Object.keys(newField)[0];
      const queryUpdate = `UPDATE persons SET ${key} = '${newField[key]}' WHERE id = ${req.query.id}`;
      this.client.query(queryUpdate);
      const result = this.client.query(`SELECT * FROM persons WHERE id_user = '${userID}'`);
      this.#setResponse(res, 200, result);
    } catch (err) {
      console.log(err);
      this.#setResponse(res, 403, message.abstractErr);
    }
  }



  async clearAll(req, res) {
    const userID = req.user.userId;
    try {
      const queryClearAll = `DELETE FROM persons WHERE id_user = '${userID}'`;
      await this.client.query(queryClearAll);
      this.#setResponse(res, 200, message.successDel);
    } catch (err) {
      this.#setResponse(res, 403, message.abstractErr);
    }
  }

  #setResponse = (res, status, message) => {
    return res.status(status).json({
      message
    });
  }
}

module.exports = Controllers;