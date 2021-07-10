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
      var pokemon_data = data.data.results;
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: pokemon_data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: err,
      });
    }
  };
};
