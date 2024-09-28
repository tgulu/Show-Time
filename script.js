// Import API key
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
    const movies = data.results.slice(0, 10); // Extract the first 10 movies from the API response
    displayMovies(movies);
  } catch (error) {
    console.error("Error fetching API data", error);
  }
}

// Display movies in the table view
function displayMovies(movies) {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = ""; // Clear existing movie entries

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
  posterImg.src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
    : "placeholder.jpg"; // Use a placeholder if poster_path is null
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

// Fetch a random movie when the "Randomise" button is clicked
async function randomFilms() {
  try {
    // Generate a random page number (max pages = 500 for discover endpoint)
    const randomPage = Math.floor(Math.random() * 500) + 1;
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=${randomPage}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const movies = data.results;

    // Select a random movie from the fetched page
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    // Display the random movie
    displayMovies([randomMovie]);
  } catch (error) {
    console.error("Error fetching random movie", error);
  }
}

// Fetch movies by genre
async function fetchMoviesByGenre(genreId) {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&sort_by=popularity.desc`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const movies = data.results.slice(0, 10); // Extract the first 10 movies
    displayMovies(movies);
  } catch (error) {
    console.error("Error fetching movies by genre", error);
  }
}

// Reset to top 10 movies when "Top 10" button is clicked
function resetToTop10() {
  fetchMovies();
}

// Add event listeners after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("randomiseButton")
    .addEventListener("click", randomFilms);

  document
    .getElementById("Top10Button")
    .addEventListener("click", resetToTop10);
});

// Add event listeners to genre elements
function addGenreEventListeners() {
  const genreElements = document.querySelectorAll(".sort-bar div");

  genreElements.forEach((element) => {
    const genreId = element.getAttribute("data-genre-id");
    element.addEventListener("click", () => fetchMoviesByGenre(genreId));
  });
}

// Fetch and display movies on page load
fetchMovies();
addGenreEventListeners();
