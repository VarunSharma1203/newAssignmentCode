

export const setBlockPhone = data => {
  return dispatch => {
    dispatch({ type: 'SET_BLOCK_DATA', payload: data });
  };
};
export const setLoginData = data => {
  return dispatch => {
    dispatch({ type: 'SET_LOGIN_DATA', payload: data });
  };
};

export const getBlockPhone = (Url, callback) => {
  return async dispatch => {
    try {
      fetch(Url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(response => response.json())
        .then(responseData => {
         
          if (responseData.status == 200) {
           
            callback(responseData.data);
            dispatch(setBlockPhone(responseData.data));
          } else {
            alert(responseData.message)
          }
        })

    } catch (err) {
      callback('');
    }
  };
};

export const getLoginData = (Url,body,callback) => {
  console.log(">>>>>>>>>>>>>",Url,body)
  return async dispatch => {
    try {
      fetch(Url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: body,
      })
        .then(response => response.json())
        .then(responseData => {
         console.log(">>>>>>>>>>>>>",responseData)
          if (responseData.status == 200) {
            callback(responseData.data);
            dispatch(setLoginData(responseData.data));
            alert(responseData.message)
          } else {
            alert(responseData.message)
          }


        })
        .catch(error => {
          console.warn(error);
          return error;
        });

    } catch (err) {
      callback('');
    }
  };
};