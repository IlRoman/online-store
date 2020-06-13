import React from 'react';
import './pagination.scss';

const Pagination = ({ onPrevPage, onNextPage, pageNumber, productsList }) => {
    return (
        <div className="pagination">
            <button
                className="pagination__button prev-page"
                onClick={onPrevPage}
                disabled={pageNumber === 0}
            >
                {'<'}
            </button>
            <div className="pagination__page-number">{`Страница № ${pageNumber + 1}`}</div>
            <button
                className="pagination__button next-page"
                onClick={onNextPage}
                disabled={pageNumber * 8 >= productsList.length}
            >
                {'>'}
            </button>
        </div>
    )
}

export default Pagination;