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

});

router.get('/users/:id', (req, res, next) => {

});

router.post('/users', (req, res, next) => {
  User.create(req.body).then(sucessPayload => {
    res.json({ ok: true, success: sucessPayload})
  })
    .catch(errorPayload => {
      res.json({ ok: false, error: errorPayload })
    })
});

router.delete('/users/:id', (req, res, next) => {

});

router.put('/users/:id', (req, res, next) => {

});

module.exports = router;
