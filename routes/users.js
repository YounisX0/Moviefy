const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');



router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get('/add', (req, res) => {
  res.render('addUser');
});

module.exports = router;
