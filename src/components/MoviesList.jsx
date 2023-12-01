import React from "react";
import {  useSelector } from "react-redux";
import MoviesData from "./MoviesData";

function MoviesList() {
  
  const data = useSelector((pre) => pre.reducer.Loading);

 
  return (
    <div>
      {data ? (
        <div style={{textAlign:'center' }}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <MoviesData />
        </div>
      )}
    </div>
  );
}

export default MoviesList;
