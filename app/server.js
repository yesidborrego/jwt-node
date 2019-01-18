const express = require('express');

// Settings
const app = express();
app.set('port', process.env.PORT || 3000);

// Middlewares


// Routes


// Server listening
app.listen(app.get('port'), () => {
  console.log(`Server ON, run in localhost:${app.get('port')}`);
});