const initialState = {
    isLoggedIn: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: !state.isLoggedIn
            }
        default:
            return state;
    }
}

export default loginReducer;
