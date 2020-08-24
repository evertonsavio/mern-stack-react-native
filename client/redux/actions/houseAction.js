export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_HOUSES,
      payload: 1,
    });
  };
};
