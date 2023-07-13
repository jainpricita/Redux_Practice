import React, { useEffect } from "react";
import {
  fetchAsyncDetail,
  getSelectedMovie,
  removeSelectedMovie,
} from "../../redux/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./movieDetail.scss";

export default function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const selectedMovie = useSelector(getSelectedMovie);

  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(selectedMovie).length===0?(<div>Loading...</div>):(
      <>
      <div className="section-left">
        <div className="movie-title">{selectedMovie.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating<i className="fa fa-star"></i>: {selectedMovie.imdbRating}
          </span>
          <span>
            IMDB Votes<i className="fa fa-thumbs-up"></i>: {selectedMovie.imdbVotes}
          </span>
          <span>
            IMDB Runtime<i className="fa fa-film"></i>: {selectedMovie.Runtime}
          </span>
          <span>
            IMDB Year<i className="fa fa-calendar"></i>: {selectedMovie.Year}
          </span>
        </div>
        <div className="movie-plot">{selectedMovie.Plot}</div>
        <div className="movie-info">
        <div>
                <span>Director</span>
                <span>{selectedMovie.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{selectedMovie.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{selectedMovie.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{selectedMovie.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{selectedMovie.Awards}</span>
              </div>
        </div>
      </div>
      <div className="section-right">
        <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      </div>
      </>)}
    </div>
  );
}
