'use client'
import ProductsList from "@/components/products/productsList"
import { useGenerationStore } from "@/models/states"
import { Product } from "@/models/types"
import { useState } from "react"
import debounce from 'lodash.debounce'

// import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
  const products = useGenerationStore((state) => state.products)
  const [searchProducts, setSearchProducts] = useState<Product[]>(products)
  function searchProductHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      setSearchProducts(products.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase()) ))
    } else {
      setSearchProducts(products)
    }
    console.log(searchProducts)
  }
  const debounceSearch = debounce(searchProductHandler, 500)
  return (
      <>
        <input type="text" placeholder="Search product..." onChange={debounceSearch}/>
        <ProductsList products={searchProducts}/>
      </>
  )
}

