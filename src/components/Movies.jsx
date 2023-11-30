import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import { useContext } from "react";
import { AuthContain } from "../AuthContent/AuthContentProvider";
import MoviesList from "./MoviesList";

function Movies() {
  const { searchMovie, setSearchMovie,  setArray } =
    useContext(AuthContain);
  const [num, setNum] = useState(0);
  console.log(searchMovie);
  const dispatch = useDispatch();
  const data = useSelector((pre) => pre.reducer);
  const data1 = useSelector((pre) => pre.reducer.moviesData);

  setArray(data1.Search);
  console.log(data.Loading);
  const handleShow = (e) => {
    e.preventDefault();

    dispatch(getData(searchMovie));
    setNum(1);
  };

  return (
    <div>
      <h1>Movie Suggestion App</h1>
      <label>
        <input
          type="text"
          onChange={(e) => setSearchMovie(e.target.value)}
          placeholder="Search for movies..."
        />
      </label>
      <label>
        <button onClick={(e) => handleShow(e)}>Search</button>
      </label>
      {num == 1 ? (
        <div>
          <MoviesList />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Movies;
