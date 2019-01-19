const User = require('../models/user');

const newUser = {
  name: 'Isabella Borrego',
  password: 'princesa',
  admin: false
}

module.exports = {
  home: (req, res) => {
    res.send('Home Page!');
  },

  setup: async (req, res) => {
    const user = new User(newUser);
    await user.save(err => {
      if(err) throw err;
      console.log('User Saved Successfully');
      res.json({"status": "Success"});
    });
  }
};