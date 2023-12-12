import { useState } from 'react'
import './App.css'
import useFetch from './hooks/UseFetch'
import Product from './components/Product'

function App() {
  const {data} = useFetch("http://localhost:4000/products")
  return (
    <>
      <div className="products">
      {
        data && data.map(product=>(
          <Product product={product} />
        ))
      }
      </div>
    </>
  )
}

export default App
