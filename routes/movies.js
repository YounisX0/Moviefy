const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const multer = require('multer');


const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024, 
  },
});

router.post('/', upload.single('poster'), async (req, res) => {
  const { title, director, year, genre } = req.body;

  try {
    const newMovie = new Movie({
      title,
      director,
      year,
      genre,
    });

    if (req.file) {
      newMovie.poster = req.file.buffer;
    }

   
    await newMovie.save();

    res.status(201).send("New movie has been created");
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/add', (req, res) => {
  res.render('addMovie'); 
});

module.exports = router;
