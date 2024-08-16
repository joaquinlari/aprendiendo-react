import { Products } from "./components/Products"
import { products as initialProducts } from "./mocks/products.json"
import { useState } from 'react'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function useFilters() {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  return { filters, filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )
}

export default App
