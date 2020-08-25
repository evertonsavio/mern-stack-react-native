export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
  return async (dispatch) => {
    const result = await fetch('http://172.18.1.17:3000/api/imoveis');
    const resultData = await result.json();
    //console.log(resultData);

    dispatch({
      type: FETCH_HOUSES,
      payload: resultData,
    });
  };
};
