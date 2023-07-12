import React from "react";
import { useEffect } from "react";
import movieAPI from "../../assets/apis/MovieApi";
import { APIKey } from "../../assets/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import "./home.scss";
import MovieListing from "../movieListing/MovieListing";
import { addMovies } from "../../redux/movieSlice";

export default function Home() {
  const movieText = "harry";
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      const response = await movieAPI.get(
        `?s=${movieText}&apiKey=${APIKey}&type=movie`
      ).catch((err)=>{
        console.log(err);
      })
       dispatch(addMovies(response.data));
    }
    fetchMovies();
  },[]);
  return (
    <div>
      <MovieListing />
    </div>
  );
}
