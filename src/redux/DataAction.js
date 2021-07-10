import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "./DataTypes";
import axios from "axios";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_DATA_START,
      });
      const data = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=100`
      );
      // console.log(data);
      var product = data.data.results;
      // console.log(product);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: product,
      });
    } catch (err) {
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: err,
        error: true,
      });
    }
  };
};
