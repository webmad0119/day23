const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

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

router.get("/update-users/:id", (req, res, next) => {
  res.render("update-user-view", {id: req.params.id})
})

router.get('/users/list/:id', (req, res, next) => {
  User.findById(req.params.id).then(userData => {
    res.json(userData)
  })
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
  console.log(req.params.id)
  console.log(req.body)

  // User.findByIdAndUpdate(req.params.id, req.body)
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(success => {
    res.json({success: success})
  })
  .catch(error => {
    res.json({error: error})
  })
});

router.get('/send-email', (req, res)=>{
  res.render("write-email")
})

//remember this is about nodemailer
router.post('/send-email', (req, res, next) => {
  //we extract the payload details from the req.body using the destructuring
  let { email, subject, message } = req.body;


  //you have to configure the transported to indicate your email server credentials. Don't add the final-real credentials here. Use .env or similar to avoid hardcoding these values in the code
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'pruebanodemailer0119@gmail.com',
      pass: 'Prueba-nodemailer-0119'
    }
  });

  //then you use the transporter's sendMail method to actually send
  transporter.sendMail({
    from: '"My Awesome Project 👻" <myawesome@project.com>',
    to: email, 
    subject: subject, 
    text: message,
    html: `<b style='color:red'>${message}</b>`
  })
  .then(info => res.json({"email-sent" : true}))
  .catch(error => console.log(error));
});

module.exports = router;
