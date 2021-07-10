import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "./DataTypes";

const dataInitialState = {
  data: [],
  errorData: "",
};

export const dataReducer = (state = dataInitialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return { ...state };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        errorData: "",
      };

    case FETCH_DATA_FAIL:
      return {
        ...state,
        data: [],
        errorData: action.payload,
      };
    default:
      return state;
  }
};
