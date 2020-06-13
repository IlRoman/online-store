const initialState = {
    isLoaded: false,
    products: null,
    activeFilter: '',
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
        case 'SET_FILTER':
            return {
                ...state,
                activeFilter: action.payload,
            }
        default:
            return state;
    }
}

export default productsReducer;