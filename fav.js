let favMovies = [];

// Get all bookmark buttons
const bookmarkBtns = document.querySelectorAll('.fa-bookmark-o');

// Add event listener to each bookmark button
bookmarkBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Toggle the favorite status of the movie
    toggleFavorite(index);
  });
});

// Function to toggle the favorite status of a movie
function toggleFavorite(index) {
  const movie = document.querySelectorAll('.movie-box')[index];
  const bookmarkBtn = movie.querySelector('.fa-bookmark-o');

  // Check if the movie is already a favorite
  const isFavorite = favMovies.includes(index);

  if (isFavorite) {
    // Remove the movie from the favorites
    favMovies = favMovies.filter(i => i !== index);
    bookmarkBtn.classList.remove('fa-bookmark');
    bookmarkBtn.classList.add('fa-bookmark-o');
  } else {
    // Add the movie to the favorites
    favMovies.push(index);
    bookmarkBtn.classList.remove('fa-bookmark-o');
    bookmarkBtn.classList.add('fa-bookmark');
  }
} 





// Function to add movie to favorites
function addToFavorites(movieId) {
    // Retrieve movie details based on movieId (you can fetch more details if needed)
    const movieElement = document.getElementById(movieId);
    const movieTitle = movieElement.querySelector('.movie-title').innerText;
    const movieType = movieElement.querySelector('.movie-type').innerText;

    // Construct an object or string with movie details
    const movieDetails = {
        id: movieId,
        title: movieTitle,
        type: movieType
        // Add more details if needed
    };

    // Store the movie details in localStorage or sessionStorage
    // For demo purposes, using localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(movieDetails);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Redirect to the favorites page
    window.location.href = '../html/favorites.html';
}
document.addEventListener('DOMContentLoaded', function () {

    // Function to handle search
    function handleSearch() {
        // Get input element and its value
        var input = document.getElementById('search-input');
        var filter = input.value.toUpperCase();

        // Get movies container
        var moviesContainer = document.getElementById('movies-content');

        // Get all movie boxes
        var movieBoxes = moviesContainer.getElementsByClassName('movie-box');

        // Loop through all movie boxes to find matches
        for (var i = 0; i < movieBoxes.length; i++) {
            var movieTitle = movieBoxes[i].getElementsByClassName('movie-title')[0];
            var txtValue = movieTitle.textContent || movieTitle.innerText;

            // Check if the title matches the search input
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                movieBoxes[i].style.display = ''; // Show matching movie box
            } else {
                movieBoxes[i].style.display = 'none'; // Hide non-matching movie box
            }
        }
    }

    // Add event listener for input changes
    document.getElementById('search-input').addEventListener('keyup', handleSearch);
});