# Show Time - Movie Database Website

https://show-time-movies.netlify.app/

## Description

Show Time is a movie database website that allows users to view a list of popular movies fetched from The Movie Database (TMDb) API. It displays essential movie information such as title, poster, overview, and release date in a table view

## API

This project uses the [The Movie Database (TMDB) API](https://developers.themoviedb.org/3/getting-started/introduction).

## Features

Fetches popular movies data from the TMDb API asynchronously using async/await and Fetch API.
Displays movie information in a table view with columns for title, poster, overview, and release date.
Centered layout and user-friendly interface.

## Image of Website

![image](https://github.com/user-attachments/assets/1c80ee63-28b2-4621-8819-ae95c01bbed3)

## Getting Started

To run the project locally on your machine, follow these steps:

1. Clone the repository:
   git clone https://github.com/your-username/show-time-movie-database.git

2. Navigate to the project directory:
   cd show-time-movie-database
   Open the index.html file in your web browser.

## API Key

To use the TMDb API, you need an API key. If you don't have one, you can obtain it by following these steps:

1. Go to the TMDb website and sign up for a new account or log in if you already have one.

2. Once you're logged in, go to your account settings page.

3. Click on the "API" tab and then "Create" to request a new API key.

4. Fill out the necessary information and submit the form to obtain your API key.

5. Copy your API key and replace the 'API_KEY' placeholder in the script.js file with your actual API key.

const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual TMDb API key

## Usage

Simply open the index.html file in your web browser to access the Show Time website. The initial 20 random movies will be displayed in the table view.
