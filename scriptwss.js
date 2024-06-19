const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        const moveAmount = 300;
        
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transition = "transform 0.3s ease-in-out";
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - moveAmount
            }px)`;
        } else {
            movieLists[i].style.transition = "transform 0.3s ease-in-out";
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});


const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})
const movies = [
    { 
      title: "Squide game",
      genre: "Action,Drama"
    },
    {
      title: "Lukii",
      actors: ["Tom Hiddleston"],
      genre: "Action"
    },
    {
      title: "Hamlet Pheron",
      genre: "Action,Drama"
    },
    {
        title: "Dune Part-Two",
        genre: "Horror"
      },
      {
        title: "El-feel el-azraa",
        genre: "Horror,Drama"
      },
      {
        title: "Agent ofShield",
        genre: "Action"
      },
      {
        title: "Hawkey",
 
        genre: "Action"
      },
      {
        title: "Jungle cruise",
        genre: "Adventure"
      },
      {
        title: "Spider-Man: No-way home",
        genre: "Action"
      },
  ];
  function displayMovies(filMovies) {
    const movieListElement = document.getElementById('movieList');
    movieListElement.innerHTML = '';
  
    filMovies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.textContent = `${movie.title} - Genre: ${movie.genre}`;
      movieListElement.appendChild(movieElement);
    });
  }
  function filterMovies() {
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value.toLowerCase();
  
    const filMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery) ||
      movie.genre.toLowerCase().includes(searchQuery)
    );
  
    displayMovies(filMovies);
  }
  document.getElementById('searchInput').addEventListener('input', filterMovies);
  displayMovies(movies);