import { Products } from "./components/Products"
import { products } from "./mocks/products.json"
import { useState } from 'react'

function App() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        products.price >= filters.minPrice &&
        (filters.category === 'all' || products.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <Products products={filteredProducts} />
  )
}

export default App
