

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

    res.status(201).json({ message: "New movie has been created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json({ message: `Movie with id ${id} has been deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send("Movie not found");
    }
    res.render('editMovie', { movie });
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.put('/:id', upload.single('poster'), async (req, res) => {
  const { title, director, year, genre } = req.body;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
      title,
      director,
      year,
      genre,
      poster: req.file ? req.file.buffer : undefined
    }, { new: true });

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
