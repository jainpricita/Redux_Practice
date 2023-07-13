import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../assets/apis/MovieApi";
import { APIKey } from "../assets/apis/MovieApiKey";

const initialState = {
  movies: {},
  series:{},
  selectedMovie:{}
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "harry";
    const response = await movieAPI.get(
      `?s=${movieText}&apiKey=${APIKey}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncSeries = createAsyncThunk(
    "shows/fetchAsyncSeries",
    async () => {
      const serieText = "friends";
      const response = await movieAPI.get(
        `?s=${serieText}&apiKey=${APIKey}&type=series`
      );
      return response.data;
    }
  );
  export const fetchAsyncDetail = createAsyncThunk(
    "shows/fetchAsyncDetail",
    async (id) => {
      const response = await movieAPI.get(
        `?apiKey=${APIKey}&Plot=full&i=${id}`
      );
      return response.data;
    }
  );

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie:(state)=>{
      state.selectedMovie={};
    }
  },
  extraReducers:{
    [fetchAsyncMovies.fulfilled]:(state,action)=>{
        state.movies = action.payload;
    },
    [fetchAsyncMovies.rejected]:()=>{
        console.log("rejected");
    },
    [fetchAsyncSeries.fulfilled]:(state,action)=>{
        state.series = action.payload;
    },
    [fetchAsyncDetail.fulfilled]:(state,action)=>{
      state.selectedMovie=action.payload;
    }

  }
});

export const {removeSelectedMovie} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries=(state)=>state.movies.series;
export const getSelectedMovie=(state)=>state.movies.selectedMovie;
export default movieSlice.reducer;
