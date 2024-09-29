const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/routes.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// MongoDB Connection url=mongodb://localhost:27017
mongoose
  .connect('mongodb://localhost:27017')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

module.exports = app;
