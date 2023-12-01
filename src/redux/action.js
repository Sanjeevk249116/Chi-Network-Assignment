import { GETERROR, GETLOADING, GETSUCCESS } from "./actionType";
import axios from "axios";

export const getData = (movies, year, type, page) => async (dispatch) => {
  const getAPI = (api, yr) => {
    console.log(yr);
    if (yr) {
      return (api = `${api}&y=${year}`);
    } else if (type) {
      return (api = `${api}&type=${type}`);
    } else if (page) {
      return (api = `${api}&page=${page}`);
    }
    return api;
  };

  try {
    dispatch({ type: GETLOADING });

    const url = getAPI(
      `https:www.omdbapi.com/?s=${movies}&apikey=646c9327`,
      year,
      type,
      page
    );

    const data = await axios.get(url);
    dispatch({ type: GETSUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: GETERROR });
  }
};
