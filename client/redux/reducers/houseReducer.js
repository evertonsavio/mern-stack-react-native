import {FETCH_HOUSES} from '../actions/houseAction';

const initialState = {
  imoveis: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_HOUSES:
      return {
        ...state,
        imoveis: action.payload,
      };
  }

  return state;
}
