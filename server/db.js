const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test1');

const db = mongoose.connection;
db.once('error', () => console.log('Mongodb connection error'));
db.once('open', () => console.log('Mongodb connection successed'));

const loginSchema = mongoose.Schema({
  username: String,
  password: String,
});

const Model = {
  Login: mongoose.model('Login', loginSchema),
};

module.exports = Model;
