// import { config } from './config';
// const apiKey = config.apiKey;

const apiKey = "2e0b89b338271b056301b32f350a6f25";

// Fetch movies from TMDb API using async/await and Fetch API
async function fetchMovies() {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // Parse the API response as JSON
    const movies = data.results.slice(0, 20); // Extract the first 20 movies from the API response
    displayMovies(movies);
  } catch (error) {
    console.error("Error fetching api data", error);
  }
}

// Display movies in the table view
function displayMovies(movies) {
  const moviesContainer = document.getElementById("movies-container");

  movies.forEach((movie) => {
    const movieRow = createMovieRow(movie); // Create a table row for each movie
    moviesContainer.appendChild(movieRow);
  });
}

// Create a table row for each movie
function createMovieRow(movie) {
  const movieRow = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.textContent = movie.title;

  const posterCell = document.createElement("td");
  const posterImg = document.createElement("img");
  posterImg.src = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`; // Use the poster_path from the API response
  posterImg.alt = movie.title;
  posterCell.appendChild(posterImg);

  const releaseDateCell = document.createElement("td");
  releaseDateCell.textContent = movie.release_date;

  const overviewCell = document.createElement("td");
  overviewCell.textContent = movie.overview;

  // Append all the cells to the row
  movieRow.appendChild(titleCell);
  movieRow.appendChild(posterCell);
  movieRow.appendChild(overviewCell);
  movieRow.appendChild(releaseDateCell);

  return movieRow;
}

// Fetch and display movies
fetchMovies();

// discover_url = f'https://api.themoviedb.org/3/discover/movie?api_key={api_key}'

function randomFilms() {
  const randomBtn = document.getElementById("randomiseButton");
}
