"use client"
// import { useGenerationStore } from "@/models/states"

import getProducts from "@/app/api/products"
import useAddToCart from "@/hooks/useAddToCart"
import { Product } from "@/models/types"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductDetails(
    { params }: { params: { id: string }}
) {
    const router = useRouter()
    const id = params.id
    console.log(id)
    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        async function fetchAPI() {
            try {
                const response = await getProducts(id)
                setProduct(response)
            } catch {
                router.push("/404")
            }
        }
        fetchAPI()
    }, [id])

    const handleAddToCart =  useAddToCart(product)
    
    // console.log(product,id)

    return ( product !== undefined ? (
        <div className="w-full max-w-md m-auto">
            <img src={product.image} alt={product.title} className='h-[50vh] m-auto'/>
            <div className="p-3 bg-slate-100 round-lg">
                <p className="text-lg">{product?.title}</p>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <button 
                    type="submit" 
                    className="rounded-full bg-red-400 w-full text-white py-1 px-5 my-5"
                    onClick={handleAddToCart}>
                    Add to cart
                </button>
            </div>
                {/* <ItemAddedToCart addedItem={product}/>  */}
        </div>) : (
            <p>There's no product</p>
        )
    )
}