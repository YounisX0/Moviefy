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

    res.status(201).json({ message: "New user has been created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: `User with id ${id} has been deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.render('editUser', { user });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put('/:id', upload.single('avatar'), async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      password: hashedPassword,
      avatar: req.file ? req.file.buffer : undefined
    }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(400).send('<script>alert("Invalid login. User doesn\'t exist."); window.location.href="/login";</script>');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('<script>alert("Invalid login. Name or password is incorrect."); window.location.href="/login";</script>');
    }

    res.redirect('/home');
  } catch (error) {
    res.status(500).send('<script>alert("Server error. Please try again later."); window.location.href="/login";</script>');
  }
});

module.exports = router;
