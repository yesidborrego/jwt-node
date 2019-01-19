const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  password: String,
  admin: Boolean
});

module.exports = mongoose.model('User', UserSchema);