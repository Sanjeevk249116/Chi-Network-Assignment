import React, { useContext, useState } from "react";
import { AuthContain } from "../AuthContent/AuthContentProvider";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../redux/action";
import Pagination from "./Pagination";
import swal from "sweetalert";

function MoviesData() {
  const { array, setObj, login, page, setCurrentPage, searchMovie } =
    useContext(AuthContain);

  const itemsPerPage = 4;
  const dispatch = useDispatch();
  const totalItems = page;

  const Navigate = useNavigate();
  const handleMoviesDetails = (el) => {
    setObj(el);
    if (login == "Login/SignUp") {
      swal("Please Login first");
      Navigate("/login");
    } else {
      Navigate("/details");
    }
    // Navigate('/details')
  };

  const paginate = (pageNumber) => {
    dispatch(getData(searchMovie, "", "", pageNumber));
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="main2">
        {array?.map((el) => (
          <div className="main22" onClick={(e) => handleMoviesDetails(el)}>
            <div className="">
              <div>
                <img src={el.Poster} alt={el.Title} />
              </div>
              <div>
                <h2>{el.Title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default MoviesData;
