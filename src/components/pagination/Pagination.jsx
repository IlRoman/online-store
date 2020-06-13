import React from 'react';
import './pagination.scss';

const Pagination = ({ onPrevPage, onNextPage, pageNumber }) => {
    return (
        <div className="pagination">
            <button
                className="pagination__button prev-page"
                onClick={onPrevPage}
                disabled={pageNumber === 1}
            >
                {'<'}
            </button>
            <div className="pagination__page-number">{pageNumber}</div>
            <button
                className="pagination__button next-page"
                onClick={onNextPage}
            // disabled={pageNumber}
            >
                {'>'}
            </button>
        </div>
    )
}

export default Pagination;