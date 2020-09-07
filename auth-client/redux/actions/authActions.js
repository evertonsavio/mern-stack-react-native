export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

const BASE_URL = 'http://192.168.56.1:3000';

export const registerUser = (authData) => {
  const {fullName, email, password} = authData;

  return async (dispatch) => {
    //logic to make post to REGISTER the user
    const result = await fetch(`${BASE_URL}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
      }),
    });

    const resultData = await result.json();
    console.log(resultData);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: 1,
    });
  };
};

export const loginUser = (authData) => {
  const {email, password} = authData;

  return async (dispatch) => {
    //loginc to make post to lOGIN user

    const result = await fetch(`${BASE_URL}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const resultData = await result.json();
    console.log(resultData);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: 1,
    });
  };
};
