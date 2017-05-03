const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/test1');

// const db = mongoose.connection;
// db.once('error', () => console.log('Mongodb connection error'));
// db.once('open', () => console.log('Mongodb connection successed'));
const DB_URL = 'mongodb://localhost:27017/test1';

/**
 * 连接
 */
mongoose.connect(DB_URL);

/**
  * 连接成功
  */
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection open to ${DB_URL}`);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error:  ${err}`);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

const loginSchema = mongoose.Schema({
  username: String,
  password: String,
});

const Model = {
  Login: mongoose.model('Login', loginSchema),
};

module.exports = Model;
