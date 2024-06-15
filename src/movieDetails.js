// MovieDetails.js

import React from "react";
import "./movieDetails.css";

const MovieDetails = ({ movieData }) => {
  const {
    Title,
    Poster,
    Released,
    imdbRating,
    Runtime,
    Genre,
    Director,
    Actors,
    Plot,
    Writer,
    Awards,
    Country,
    Language,
    Rated,
    Year,
  } = movieData;

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img src={Poster} alt={`${Title} Poster`} />
      </div>
      <div className="movie-info">
        <h1>{Title}</h1>
        <p>
          <strong>Released:</strong> {Released}
        </p>
        <p>
          <strong>Rated:</strong> {Rated}
        </p>
        <p>
          <strong>IMDb Rating:</strong> {imdbRating}
        </p>
        <p>
          <strong>Runtime:</strong> {Runtime}
        </p>
        <p>
          <strong>Genre:</strong> {Genre}
        </p>
        <p>
          <strong>Director:</strong> {Director}
        </p>
        <p>
          <strong>Actors:</strong> {Actors.split(", ").join(", ")}
        </p>
        <p>
          <strong>Writer:</strong> {Writer}
        </p>
        <p>
          <strong>Awards:</strong> {Awards}
        </p>
        <p>
          <strong>Country:</strong> {Country}
        </p>
        <p>
          <strong>Language:</strong> {Language}
        </p>
        <p>
          <strong>Year:</strong> {Year}
        </p>
        <p>
          <strong>Plot:</strong> {Plot}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
