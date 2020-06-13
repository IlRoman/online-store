import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setProducts, setFilter } from './actions/products';
import { changePageNumber } from './actions/page-number';

import { filterProducts } from './selectors'

import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import Filter from './components/filter/Filter'
import Pagination from './components/pagination/Pagination';

const App = ({ productsList, setProducts, pageNumber, changePageNumber, setFilter }) => {

  useEffect(() => {
    axios.get('/products-list.json')
      .then(response => {
        setProducts(response.data)
      })
  }, [])

  const onPrevPage = () => {
    console.log(pageNumber)
    changePageNumber(pageNumber - 1)
  }

  const onNextPage = () => {
    console.log(pageNumber)
    changePageNumber(pageNumber + 1)
  }

  return (
    <>
      <Header />
      <main className="main">
        <section className="products-container">
          <div className="products-container__list">
            {!productsList
              ? 'Loading...'
              : productsList.map((element) => (
                <Product
                  key={element.id}
                  elem={element}
                />
              ))}
          </div>
          <Pagination
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
            pageNumber={pageNumber + 1}
          />
        </section>
        <aside className="aside">
          <Filter
            setFilter={setFilter}
          />
        </aside>
      </main>
      <Footer />
    </>
  )
}

const mapState = state => ({
  productsList: filterProducts(state),
  isLoaded: state.products.isLoaded,
  pageNumber: state.pageNumber.pageNumber
})

const mapDispatch = {
  setProducts,
  setFilter,
  changePageNumber,
}

export default connect(mapState, mapDispatch)(App);