import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../redux/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import "./movieListing.scss";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

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

  let renderSeries =
    series.Response === "True" ? (
      series.Search.map((serie, index) => {
        return <MovieCard key={index} data={serie}></MovieCard>;
      })
    ) : (
      <div className="movies-error">
        <h3>{series.Error}</h3>
      </div>
    );
    
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Series</h2>
        <div className="movie-container">{renderSeries}</div>
      </div>
    </div>
  );
}
