import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "./DataTypes";

const dataInitialState = {
  loadingData: false,
  data: [],
  errorData: "",
};

export const dataReducer = (state = dataInitialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return { ...state, loadingData: true };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loadingData: false,
        data: action.payload,
        errorData: "",
      };

    case FETCH_DATA_FAIL:
      return {
        ...state,
        loadingData: false,
        data: [],
        errorData: action.payload,
      };
    default:
      return state;
  }
};
