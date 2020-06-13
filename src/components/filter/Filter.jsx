import React from 'react';
import './filter.scss';

const Filter = ({ setFilter }) => {

    return (
        <div className="filter">
            <div
                className="filter__item"
                onClick={setFilter.bind(this, 'all')}>
                Все
            </div>
            <div
                className="filter__item"
                onClick={setFilter.bind(this, 'popular')}>
                Популярные
            </div>
            <div
                className="filter__item"
                onClick={setFilter.bind(this, 'expensive')}>
                Цена (Сначала дорогие)
            </div>
            <div
                className="filter__item"
                onClick={setFilter.bind(this, 'cheap')}>
                Цена (Сначала дешевые)
            </div>
            <div
                className="filter__item"
                onClick={setFilter.bind(this, 'author')}>
                По автору
            </div>
        </div>
    )
}

export default Filter;