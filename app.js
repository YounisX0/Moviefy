const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');
const path = require('path');
const methodOverride = require('method-override');
const Movie = require('./models/movie');
const User = require('./models/user');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method')); 

const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024, 
  },
});

mongoose.connect("mongodb+srv://ahmedyounis:2004@cluster.j390qaw.mongodb.net/Moviefy", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Connection to MongoDB failed:", error);
});

app.set('view engine', 'ejs'); 
app.use(express.urlencoded({ extended: true }));
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

    await newUser.save();

    res.status(201).send("New User has been saved");
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.get('/signup', (req, res) => {
  res.render('signup');
});


app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User with that email already exists');
    }

   
    const newUser = new User({
      name,
      email,
      password
    });

  
    await newUser.save();

    res.status(201).send("New User has been saved");
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.get('/data', async (req, res) => {
  try {
    const movies = await Movie.find();
    const users = await User.find();
    res.render('admin', { movies: movies, users: users });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
