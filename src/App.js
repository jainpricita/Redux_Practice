import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/movieDetail/MovieDetail";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.scss";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Home /> },
  {
    path: "/movie/:imdbID",
    element: <MovieDetail />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
      <RouterProvider router={router}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
