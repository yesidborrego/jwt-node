const router = require('express').Router();
const User = require('../models/user')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({name});
  if(!user) {
    return res.json({
      status: 'success',
      message: 'User no found.'
    });
  }
  if(user.password !== password) {
    return res.json({
      status: 'success',
      message: 'Password no match.'
    });
  }
  const token = jwt.sign({user}, req.app.get('access_auth'));
  res.json({
    status: 'success',
    message: 'Enjoy your token',
    token
  });
});

router.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token){
    jwt.verify(token, req.app.get('access_auth'), (err, decoded) => {
      if(err){
        return res.json({
          message: 'Access Denied.',
        });
      };
      next();
    });
  } else {
    res.json({
      status: 'Failure',
      message: 'Access Denied.'
    });
  }
});

router.get('/', (req, res) => {
 res.json({
   message: 'Welcome to my API'
  });
});

router.get('/users', async (req, res) => {
  const users = await User.find();
  if(users){
    res.json(users);
  } else {
    res.json({
      "messages": "Users no found."
    });
  }
});

module.exports = router;