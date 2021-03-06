const model = require('./db');
const express = require('express');

const router = express.Router();

router.post('/api/login/createUser', (req, res) => {
  const newUser = new model.Login({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(req.body.username);
  newUser.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('createUser successed');
    }
  });
});

router.get('/api/login/getUser', (req, res) => {
  model.Login.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
    return '';
  });
});

module.exports = router;
