const express = require('express');
const router = express.Router();

const Post = require('../models/posts');
const User = require('../models/users');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/posts/:limit', (req, res, next) => {

});

router.get('/posts/:id', (req, res, next) => {

});

router.delete('/posts/:id', (req, res, next) => {

});

router.post('/posts', (req, res, next) => {
  // Post.create({})
});

router.put('/posts/:id', (req, res, next) => {

});

router.get('/users/:limit', (req, res, next) => {
  User.find({}).limit(+req.params.limit).then(users => {
    res.json({
      users
    })
  })
});

router.get('/add-user', (req, res, next) => {
  res.render("add-user-view")
});

router.get('/users/:id', (req, res, next) => {

});

router.get('/list-users', (req, res, next) => {
  User.find({}).then(users => {
    res.render("list-users", { users })
  })
});

router.post('/users', (req, res, next) => {
  User.create(req.body).then(sucessPayload => {
    res.json({ ok: true, success: sucessPayload })
  })
    .catch(errorPayload => {
      res.json({ ok: false, error: errorPayload })
    })
});

router.delete('/users/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id).then(deletedPayload => {
    User.find({}).then(usersPayload => {
      res.json({users: usersPayload})
    })
  })
});

router.put('/users/:id', (req, res, next) => {

});

module.exports = router;
