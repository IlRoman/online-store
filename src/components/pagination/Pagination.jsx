import React from 'react';
import './pagination.scss';

const Pagination = ({ onPrevPage, onNextPage, pageNumber, filteredProductsList }) => {
    return (
        <div className="pagination">
            <button
                className="pagination__button prev-page"
                onClick={onPrevPage}
                disabled={pageNumber === 0}
            >
                {<i className="fas fa-long-arrow-alt-left"></i>}
            </button>
            <div className="pagination__page-number">{`Страница № ${pageNumber + 1}`}</div>
            <button
                className="pagination__button next-page"
                onClick={onNextPage}
                disabled={(pageNumber + 1) * 6 >= filteredProductsList.length}
            >
                {<i className="fas fa-long-arrow-alt-right"></i>}
            </button>
        </div>
    )
}

export default Pagination;