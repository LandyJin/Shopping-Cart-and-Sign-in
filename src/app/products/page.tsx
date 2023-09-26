"use client"
import { useGenerationStore } from '@/models/states';
import ProductsList from '@/components/products/productsList';

const Products = () => {
    const products = useGenerationStore((state) => state.products)
    return (
        <>
            <ProductsList products={products}/>
        </>
    )
}

export default Products;