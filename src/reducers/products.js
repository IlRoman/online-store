const initialState = {
    isLoaded: false,
    products: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                isLoaded: true,
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isLoaded: action.payload
            };
        default:
            return state;
    }
}

export default productsReducer;