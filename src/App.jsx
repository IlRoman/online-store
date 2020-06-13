import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setProducts, setFilter } from './actions/products';
import { changePageNumber } from './actions/page-number';
import { login } from './actions/login';

import { filterProducts } from './selectors'

import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import Filter from './components/filter/Filter'
import Pagination from './components/pagination/Pagination';
import Login from './components/login/Login'

const App = ({ productsList, setProducts, pageNumber, changePageNumber, setFilter, isLoggedIn, login }) => {

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
      <Header
        isLoggedIn={isLoggedIn}
        login={login}
      />
      <main className="main">
        {!isLoggedIn
          ? <Login login={login} />
          : (
            <>
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
                  pageNumber={pageNumber}
                  productsList={productsList}
                />
              </section>
              <aside className="aside">
                <Filter
                  setFilter={setFilter}
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
  productsList: filterProducts(state),
  isLoaded: state.products.isLoaded,
  pageNumber: state.pageNumber.pageNumber,
  isLoggedIn: state.isLoggedIn.isLoggedIn,
})

const mapDispatch = {
  setProducts,
  setFilter,
  changePageNumber,
  login,
}

export default connect(mapState, mapDispatch)(App);