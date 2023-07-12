import { createSlice } from "@reduxjs/toolkit";
import movieAPI from "../assets/apis/MovieApi";
import {APIKey} from "../assets/apis/MovieApiKey";

const initialState={
    movies:{},
};

const movieSlice=createSlice({
    name: "movies",
    initialState,
    reducers:{
        addMovies:(state,action)=>{
            state.movies= action.payload;
        }
    },
});

export const {addMovies}=movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;