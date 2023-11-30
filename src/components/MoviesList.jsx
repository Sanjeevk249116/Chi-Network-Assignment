import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesData from "./MoviesData";
import { getData } from "../redux/action";
import { AuthContain } from "../AuthContent/AuthContentProvider";

function MoviesList() {
  const { searchMovie, array, setArray } = useContext(AuthContain);
  const dispatch = useDispatch();
  const data = useSelector((pre) => pre.reducer.Loading);

  console.log(array);
  useEffect(
    (e) => {
      dispatch(getData(searchMovie));
    },
    [searchMovie]
  );
  return (
    <div>
      {data ? (
        <div>
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
