const express = require('express');
// import connectDB from './db/indexdb.js';
const connectDB = require('./db/index.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const ruleRoutes = require('./routes/ruleRoutes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Method to connect the db
connectDB() 
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port:  http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed!!!", err);
  });

// Route for serving the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

// API routes
app.use('/api/rules', ruleRoutes);
