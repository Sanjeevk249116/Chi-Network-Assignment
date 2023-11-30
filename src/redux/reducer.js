import { GETLOADING, GETSUCCESS } from "./actionType";
const initailState = {
  Loading: false,
  moviesData: [],
};

function reducer(state = initailState, { type, payload }) {
  switch (type) {
    case GETLOADING:
      return { ...state, Loading: true };
    case GETSUCCESS:
      return { ...state, moviesData: payload, Loading: false };

    default:
      return state;
  }
}

export default reducer;
