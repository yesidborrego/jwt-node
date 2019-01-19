const mongoose = require('mongoose');
const { mongodb } = require('./config');

mongoose.connect(mongodb.URI, mongodb.options)
  .then(db => console.log('MongoDB ON'))
  .catch(err => console.error('SE produjo un error:', err));
  