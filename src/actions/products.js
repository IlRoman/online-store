export const setProducts = products => ({
    type: 'SET_PRODUCTS',
    payload: products
})

export const setFilter = filterText => ({
    type: 'SET_FILTER',
    payload: filterText,
})