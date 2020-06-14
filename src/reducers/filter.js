const initialState = {
    searchQuery: '',
    sortText: '',
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                searchQuery: action.payload,
            }
        case 'SET_SORT_TEXT':
            return {
                ...state,
                sortText: action.payload,
            }
        default:
            return state;
    }
}

export default filterReducer;