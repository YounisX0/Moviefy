// app.js
const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');
const Movie = require('./models/movie');
const User=require('./models/user');

const app = express();

mongoose.connect("mongodb+srv://ahmedyounis:2004@cluster.j390qaw.mongodb.net/Moviefy?retryWrites=true&w=majority&appName=cluster", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Connection to MongoDB failed:", error);
});

app.use(express.json());

app.use('/movies', movieRoutes);
app.use('/users', userRoutes);


app.post("/movies", async (req, res) => {
  const { title, director, year, genre } = req.body;

  try {
    const newMovie = new Movie({
      title: title,
      director: director,
      year: year,
      genre: genre
    });

    await newMovie.save();

    res.status(201).send("New Movie has been saved");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  const { name, email, password} = req.body;

  try {
    const newUser = new User({
      name: name,
      email: email,
      year: password,
    });

    await newMovie.save();

    res.status(201).send("New Movie has been saved");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
