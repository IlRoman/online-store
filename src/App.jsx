import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setProducts } from './actions/products';
import { setSort, setSearchQuery } from './actions/filter';
import { changePageNumber } from './actions/page-number';
import { login } from './actions/login';

import { filterProducts, searchQuerySelector } from './selectors'

import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import Filter from './components/filter/Filter'
import Pagination from './components/pagination/Pagination';
import Login from './components/login/Login';
import Search from './components/search/Search';

import { runAnimation } from './animations';

const App = ({ setProducts, pageNumber, changePageNumber, setSort, setSearchQuery, isLoggedIn, login, filteredProductsList, searchQuery, addToCart }) => {

  useEffect(() => {
    axios.get('/products-list.json')
      .then(response => {
        setProducts(response.data)
      })
  }, [])

  useEffect(() => {
    if ([...filteredProductsList].splice(pageNumber * 8, 8).length === 0) {
      changePageNumber(0)
    }
  })

  const onPrevPage = () => {
    changePageNumber(pageNumber - 1)
    runAnimation()
  }

  const onNextPage = () => {
    changePageNumber(pageNumber + 1)
    runAnimation()
  }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        login={login}
      />
      <main className="main">
        {!isLoggedIn
          ? <Login login={login} />
          : (
            <>
              <section className="products-container animation">
                <div className="products-container__list">
                  {!filteredProductsList
                    ? 'Loading...'
                    : [...filteredProductsList]
                      .splice(pageNumber * 9, 9)
                      .map((product) => (
                        <Product
                          key={product.id}
                          addToCart={addToCart}
                          product={product}
                        />
                      ))}
                </div>
                <Pagination
                  onPrevPage={onPrevPage}
                  onNextPage={onNextPage}
                  pageNumber={pageNumber}
                  filteredProductsList={filteredProductsList}
                />
              </section>
              <aside className="aside animation">
                <Search
                  setSearchQuery={setSearchQuery}
                  searchQuery={searchQuery.searchQuery}
                />
                <Filter
                  setSort={setSort}
                />
              </aside>
            </>
          )
        }
      </main>
      <Footer />
    </>
  )
}

const mapState = state => ({
  filteredProductsList: filterProducts(state),
  searchQuery: searchQuerySelector(state),
  isLoaded: state.products.isLoaded,
  pageNumber: state.pageNumber.pageNumber,
  isLoggedIn: state.isLoggedIn.isLoggedIn,
})

const mapDispatch = {
  setProducts,
  setSort,
  setSearchQuery,
  changePageNumber,
  login,
}

export default connect(mapState, mapDispatch)(App);