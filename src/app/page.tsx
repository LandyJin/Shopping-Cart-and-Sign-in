'use client'
import ProductsList from "@/components/products/productsList"
import { useGenerationStore } from "@/models/states"

// import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
  const products = useGenerationStore((state) => state.products)
  return (
      <>
          <ProductsList products={products}/>
      </>
  )
}

