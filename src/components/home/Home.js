import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./home.scss";
import MovieListing from "../movieListing/MovieListing";
import { fetchAsyncMovies ,fetchAsyncSeries} from "../../redux/movieSlice";

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries())
  },[]);

  return (
    <div>
      <MovieListing />
    </div>
  );
}
