import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { getAllMovies } from "../../redux/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./movieListing.scss";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
       return <MovieCard key={index} data={movie}></MovieCard>;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  );
}
