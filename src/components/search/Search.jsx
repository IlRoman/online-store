import React from 'react';
import './search.scss'

const Search = ({ setSearchQuery, searchQuery }) => {

    return (
        <div className="search">
            <input
                className="search__input"
                type="text"
                placeholder="введите запрос..."
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery} />
            <i className="fas fa-search"></i>
        </div>
    )
}

export default Search;