import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setProducts } from './actions/products';
import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Product from './components/product/Product'

const App = ({ productsList, setProducts }) => {

  useEffect(() => {
    axios.get('/products-list.json')
      .then(response => {
        setProducts(response.data)
      })
  }, [])

  return (
    <>
      <Header />
      <main className="main">
        {!productsList
          ? 'Loading'
          : productsList.map((element) => (
            <Product
              key={element.id}
              elem={element}
            />
          ))}
      </main>
      <Footer />
    </>
  )
}

const mapState = ({ products }) => ({
  productsList: products.products,
  isLoaded: products.isLoaded
})

const mapDispatch = {
  setProducts,
}

export default connect(mapState, mapDispatch)(App);