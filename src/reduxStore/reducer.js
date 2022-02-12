const initialState = {
    arrayData: [],
    loginData:''

}
const reducer = (state = initialState, action) => {

    const newState = { ...state };
    switch (action.type) {

        case 'SET_BLOCK_DATA':
            return {
                ...state,
                arrayData: action.payload,
            };

        case 'SET_LOGIN_DATA':
            return {
                ...state,
                loginData: action.payload,
            };

    }
    return newState;
}

export default reducer;