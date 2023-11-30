import { GETERROR, GETLOADING, GETSUCCESS } from "./actionType";
import axios from "axios";
export const getData = (movies) => async (dispatch) => {
  try {
    dispatch({ type: GETLOADING });

    const data = await axios.get(`https://www.omdbapi.com/?s=${movies}&apikey=646c9327`);
    dispatch({ type: GETSUCCESS, payload: data.data });
  } catch (err) {
    dispatch({ type: GETERROR });
  }
};
