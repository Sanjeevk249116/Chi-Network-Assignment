import React from "react";
import { useNavigate } from "react-router-dom";

function Favorite() {
  const Navigate = useNavigate();
  const arr = JSON.parse(localStorage.getItem("movie"));
  console.log(arr);
  const deleteData = (ele) => {
    const dt = arr.filter((el) => {
      return el.Title !== ele.Title;
    });
    console.log(dt);
    localStorage.setItem("movie", JSON.stringify(dt));
    Navigate("/favorites");
  };
  return (
    <div>
      {arr.length == 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>No movies in your favorites page</h1>
        </div>
      ) : (
        <></>
      )}
      {arr?.map((el) => (
        <div className="mainfev">
          <div className="main2 fav">
            <div>
              <img src={el?.Poster} alt={el?.Title} />
            </div>
            <div>
              <div>
                <h1>{el?.Title}</h1>
              </div>
              <div>
                <h2>Type:{el?.Type}</h2>
              </div>
              <div>
                <h2>Release year: {el?.Year}</h2>
                <p>ImdbID: {el?.imdbID}</p>
              </div>
            </div>
            <div>
              <div>
                <button className="btn3" onClick={(e) => deleteData(el)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favorite;
