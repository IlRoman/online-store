const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {

    let combineItems = [...state.items];

    if (action.type === 'ADD_TO_CART') {
        let index = state.items.findIndex(o => o.title === action.payload.title);
        if (index !== -1) {
            combineItems[index].count += 1
            return {
                ...state,
                items: [
                    ...combineItems,
                ]
            }
        } else {
            return {
                items: [
                    ...state.items,
                    action.payload,
                ]
            }
        }
    }

    if (action.type === 'REMOVE_FROM_CART') {
        let removeIndex = state.items.findIndex(o => o.id === action.payload)
        combineItems[removeIndex].count -= 1;
        if (combineItems[removeIndex].count <= 0) {
            combineItems = combineItems.filter(o => o.id !== action.payload)
        }
        return {
            ...state,
            items: combineItems
        }

    }

    return {
        ...state
    }
}

export default cartReducer;