import React, { useContext } from "react";
import { AuthContain } from "../AuthContent/AuthContentProvider";

function MoviesData() {
  const { array, obj, setObj } = useContext(AuthContain);
  const handleMoviesDetails = (el) => {
    setObj(el);
  };

  return (
    <div>
      {array?.map((el) => (
        <div onClick={(e) => handleMoviesDetails(el)}>
          <div>
            <img src={el.Poster} alt={el.Title} />
          </div>
          <div>
            <h2>{el.Title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesData;
