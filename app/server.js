const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Initial Configuration
require('./database'); //MongoDB
const routes = require('./routes/routes'); // Routes
const apiRoutes = require('./routes/api'); // API Routes
const { secret } = require('./config');

// Settings
const app = express();
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('access_auth', secret);

// Routes
app.use('/', routes);
app.use('/api', apiRoutes);

// Server listening
app.listen(app.get('port'), () => {
  console.log(`Server ON, run in localhost:${app.get('port')}`);
});