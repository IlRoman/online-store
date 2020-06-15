import React from 'react';
import './filter.scss';
import { runAnimation } from '../../animations';

const Filter = ({ setSort }) => {

    const handleFilter = type => {
        runAnimation()
        setSort(type)
    }

    return (
        <div className="filter">
            <h2>Фильтрации</h2>
            <div
                className="filter__item"
                onClick={() => handleFilter('all')}>
                Все
            </div>
            <div
                className="filter__item"
                onClick={() => handleFilter('popular')}>
                Популярные
            </div>
            <div
                className="filter__item"
                onClick={() => handleFilter('expensive')}>
                Цена (Сначала дорогие)
            </div>
            <div
                className="filter__item"
                onClick={() => handleFilter('cheap')}>
                Цена (Сначала дешевые)
            </div>
            <div
                className="filter__item"
                onClick={() => handleFilter('author')}>
                По автору
            </div>
        </div>
    )
}

export default Filter;