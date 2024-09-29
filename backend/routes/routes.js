const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const Address = require('../models/address.js');

// Route to create a new user and address
router.post('/register', async (req, res) => {
  try {
    const { name, street, city, country } = req.body;

    // Create the address
    const address = new Address({
      street,
      city,
      country
    });
    await address.save();

    // Create the user and associate the address
    const user = new User({
      name,
      addresses: [address._id]
    });
    await user.save();

    // Update address with user reference
    address.user = user._id;
    await address.save();

    res.status(201).json({ message: 'User and address created successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user and address.', error });
  }
});

module.exports = router;
