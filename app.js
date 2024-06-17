const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');

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


const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
