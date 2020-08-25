import {FETCH_HOUSES, CREATE_HOUSES} from '../actions/houseAction';

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
    case CREATE_HOUSES:
      return {
        ...state,
        imoveis: state.imoveis.concat(action.payload),
      };
  }

  return state;
}
