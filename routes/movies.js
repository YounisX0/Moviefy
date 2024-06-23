

const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const multer = require('multer');

const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
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
      return res.status(404).send("Movie not found");
    }

    res.status(200).send("Movie updated successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
