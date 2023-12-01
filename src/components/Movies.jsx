import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContain } from "../AuthContent/AuthContentProvider";
import MoviesList from "./MoviesList";

function Movies() {
  const { searchMovie, setSearchMovie, setArray, array, setPage, page } =
    useContext(AuthContain);

  const [num, setNum] = useState(0);

  const dispatch = useDispatch();
  const data = useSelector((pre) => pre.reducer);
  const data1 = useSelector((pre) => pre.reducer.moviesData);

  setArray(data1.Search);
console.log(data1)
  setPage(data1.Search?.length);
  console.log(data.Loading);
  const handleShow = (e, dt, ty) => {
    e.preventDefault();
    if (ty) {
      dispatch(getData(searchMovie, dt, ty));
    } else {
      dispatch(getData(searchMovie, dt));
    }
    setNum(1);
  };

  const handleChange = (e) => {
    if (searchMovie) {
      handleShow(e, e.target.value);
    } else {
      swal("Please search the Movies First");
    }
  };
  const handleChangeType = (e) => {
    if (searchMovie) {
      handleShow(e, "", e.target.value);
    } else {
      swal("Please search the Movies First");
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px" }}>
        Movie Suggestion App
      </h1>
      <div className="main11">
        <div className="filter-options">
          <form style={{ marginTop: "0px" }}>
            <label>
              <input
                type="text"
                value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)}
                placeholder="Search for movies..."
              />
              <button className="btn" onClick={(e) => handleShow(e)}>
                Search
              </button>
            </label>
          </form>

          <div>
            <span className="sort-type">Sort by Year:</span>
            <select className="sort-by-year" onChange={(e) => handleChange(e)}>
              <option value="">Select an Year option</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
            </select>
          </div>
          <label>
            <span className="sort-type"> Sort by Type:</span>
            <select
              className="sort-by-type"
              onChange={(e) => handleChangeType(e)}
            >
              <option value="">Select an Type option</option>
              {/* movie, series, episode */}
              <option value="movie">movies</option>
              <option value="series">series</option>
              <option value="episode">episode</option>
            </select>
          </label>
        </div>
      </div>
      {num == 1 || array ? (
        <div>
          <MoviesList />
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Please Search Movies...</h2>
        </div>
      )}
    </div>
  );
}

export default Movies;
