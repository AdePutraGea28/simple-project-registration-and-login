const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
// import routes
const authRoute = require('./routes/auth.js');
const postsRoute = require('./routes/posts.js');

dotenv.config();

let URI = process.env.DB_CONNECT;
// connect to DB
mongoose.connect(URI, { useNewUrlParser: true }, () => console.log('connected to db!'));

// middleware
app.use(express.json());

// route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000, () => {
  console.log('Up and running');
});
