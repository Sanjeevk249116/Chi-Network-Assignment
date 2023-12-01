import React, { useContext } from "react";
import { AuthContain } from "../AuthContent/AuthContentProvider";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

function MoviesDetails() {
  const Navigate = useNavigate();
  const ArrObj = JSON.parse(localStorage.getItem("movie")) || [];
  const { obj } = useContext(AuthContain);
  const handleLocal = () => {
    const dt = ArrObj.filter((el) => {
      if (el.Title === obj.Title) {
        return el;
      }
    });
    if (dt.length >= 1) {
      swal("Movies is already add into favorites");
      Navigate("/favorites");
    } else {
      if (obj.length != 0) {
        console.log(obj);
        ArrObj.push(obj);
        localStorage.setItem("movie", JSON.stringify(ArrObj));
        swal("Successfully added to favorites");
      }
    }
  };
  return (
    <div className="main1">
      <div>
        <div>
          <img src={obj?.Poster} alt={obj?.Title} />
        </div>
        <div>
          <div>
            <h1>{obj?.Title}</h1>
          </div>
          <div>
            <h2>Type:{obj?.Type}</h2>
          </div>
          <div>
            <h2>Release year: {obj?.Year}</h2>
            <p>ImdbID: {obj?.imdbID}</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to={"/"}>
            {" "}
            <div>
              <button className="btn2">Back</button>
            </div>
          </Link>
          <div>
            <button className="btn2" onClick={handleLocal}>
              Add to Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetails;
