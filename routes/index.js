const express = require('express');
const router = express.Router();

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

});

router.put('/posts/:id', (req, res, next) => {

});

router.get('/users/:limit', (req, res, next) => {

});

router.get('/users/:id', (req, res, next) => {

});

router.delete('/users/:id', (req, res, next) => {

});

router.put('/users/:id', (req, res, next) => {

});

module.exports = router;
