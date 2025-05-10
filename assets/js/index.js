const parentElement = document.querySelector(".main");
const seachInput = document.querySelector(".input");
const movieRatings = document.querySelector("#rating-select");
const movieGenres = document.querySelector("#genre-select");

let searchValue = "";
let ratings = 0;
let genre = "";
let filteredArrOfMovies = [];

const URL = "https://movies-app.prakashsakari.repl.co/api/movies";

/*const getMovies = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {}
};*/

let movies = [
  {
    "id": 1,
    "name": "The Shawshank Redemption",
    "genre": "Drama",
    "imdb_rating": 9.3,
    "duration": 142,
    "img_link": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
  },
  {
    "id": 2,
    "name": "The Godfather",
    "genre": "Crime, Drama",
    "imdb_rating": 9.2,
    "duration": 175,
    "img_link": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    "id": 3,
    "name": "The Dark Knight",
    "genre": "Action, Crime, Drama",
    "imdb_rating": 9.0,
    "duration": 152,
    "img_link": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
  },
  {
    "id": 4,
    "name": "Pulp Fiction",
    "genre": "Crime, Drama",
    "imdb_rating": 8.9,
    "duration": 154,
    "img_link": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    "id": 5,
    "name": "Fight Club",
    "genre": "Drama",
    "imdb_rating": 8.8,
    "duration": 139,
    "img_link": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    "id": 6,
    "name": "Inception",
    "genre": "Action, Adventure, Sci-Fi",
    "imdb_rating": 8.8,
    "duration": 148,
    "img_link": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
  },
  {
    "id": 7,
    "name": "The Matrix",
    "genre": "Action, Sci-Fi",
    "imdb_rating": 8.7,
    "duration": 136,
    "img_link": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    "id": 8,
    "name": "Goodfellas",
    "genre": "Biography, Crime, Drama",
    "imdb_rating": 8.7,
    "duration": 146,
    "img_link": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    "id": 9,
    "name": "The Silence of the Lambs",
    "genre": "Crime, Drama, Thriller",
    "imdb_rating": 8.6,
    "duration": 118,
    "img_link": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    "id": 10,
    "name": "Interstellar",
    "genre": "Adventure, Drama, Sci-Fi",
    "imdb_rating": 8.6,
    "duration": 169,
    "img_link": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  }
];
console.log(movies);

const createElement = (element) => document.createElement(element);

// function to create movie cards

const createMovieCard = (movies) => {
  for (let movie of movies) {
    // creating parent container
    const cardContainer = createElement("div");
    cardContainer.classList.add("card", "shadow");

    // creating image container
    const imageContainer = createElement("div");
    imageContainer.classList.add("card-image-container");

    // creating card image
    const imageEle = createElement("img");
    imageEle.classList.add("card-image");
    imageEle.setAttribute("src", movie.img_link);
    imageEle.setAttribute("alt", movie.name);
    imageContainer.appendChild(imageEle);

    cardContainer.appendChild(imageContainer);

    // creating card details container

    const cardDetails = createElement("div");
    cardDetails.classList.add("movie-details");

    // card title

    const titleEle = createElement("p");
    titleEle.classList.add("title");
    titleEle.innerText = movie.name;
    cardDetails.appendChild(titleEle);

    // card genre

    const genreEle = createElement("p");
    genreEle.classList.add("genre");
    genreEle.innerText = `Genre: ${movie.genre}`;
    cardDetails.appendChild(genreEle);

    // ratings and length container
    const movieRating = createElement("div");
    movieRating.classList.add("ratings");

    // star/rating component

    const ratings = createElement("div");
    ratings.classList.add("star-rating");

    // star icon
    const starIcon = createElement("span");
    starIcon.classList.add("material-icons-outlined");
    starIcon.innerText = "star";
    ratings.appendChild(starIcon);

    // ratings
    const ratingValue = createElement("span");
    ratingValue.innerText = movie.imdb_rating;
    ratings.appendChild(ratingValue);

    movieRating.appendChild(ratings);

    // length
    const length = createElement("p");
    length.innerText = `${movie.duration} mins`;

    movieRating.appendChild(length);
    cardDetails.appendChild(movieRating);
    cardContainer.appendChild(cardDetails);

    parentElement.appendChild(cardContainer);
  }
};

function handleSearch(event) {
  searchValue = event.target.value.toLowerCase();
  filteredArrOfMovies = searchValue?.length > 0 ? movies.filter(
    movie => searchValue === movie.name.toLocaleLowerCase()
    || searchValue === director_name.toLowerCase()
    || movie.writter_name.toLowerCase().split(",").includes(searchValue)
    || movie.cast_name.toLowerCase().split(",").includes(searchValue)
  ) 
  : movies;
  parentElement.innerHTML = "";
  createMovieCard(filteredArrOfMovies);
}

seachInput.addEventListener("keyup", handleSearch);

createMovieCard(movies);