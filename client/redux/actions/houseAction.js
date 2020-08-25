export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () => {
  return async dispatch => {
    const result = await fetch ('http://192.168.56.1:3000/api/imoveis');
    const resultData = await result.json ();
    //console.log(resultData);

    dispatch ({
      type: FETCH_HOUSES,
      payload: resultData,
    });
  };
};

export const createHome = ({
  price,
  title,
  yearBuild,
  address,
  description,
  homeType,
  image,
}) => {
  return async dispatch => {
    const response = await fetch ('http://192.168.56.1:3000/api/imoveis', {
      method: 'post',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify ({
        price, // shortcut for -> price: price
        title,
        yearBuild,
        address,
        description,
        homeType,
        image,
      }),
    });

    const responseData = await response.json ();
    //console.log(responseData);

    dispatch ({
      type: CREATE_HOUSES,
      payload: responseData,
    });
  };
};
