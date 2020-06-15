import React from 'react';
import './search.scss'
import { runAnimation } from '../../animations'

const Search = ({ setSearchQuery, searchQuery }) => {

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        runAnimation()
    }

    return (
        <div className="search">
            <input
                className="search__input"
                type="text"
                placeholder="введите запрос..."
                onChange={handleChange}
                value={searchQuery} />
            <i className="fas fa-search"></i>
        </div>
    )
}

export default Search;