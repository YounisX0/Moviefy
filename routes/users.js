const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const multer = require('multer');

const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024, 
  },
});


router.post('/', upload.single('avatar'), async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    if (req.file) {
      newUser.avatar = req.file.buffer;
    }

    await newUser.save();
    res.status(201).send("New user has been created");
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get('/add', (req, res) => {
  res.render('addUser'); 
});

module.exports = router;
