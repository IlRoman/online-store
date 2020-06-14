export const setSearchQuery = searchQuery => ({
    type: 'SET_FILTER',
    payload: searchQuery,
})

export const setSort = activeSortText => ({
    type: 'SET_SORT_TEXT',
    payload: activeSortText,
})