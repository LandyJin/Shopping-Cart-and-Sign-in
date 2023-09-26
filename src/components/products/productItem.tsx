import { Product } from "@/models/types";
import Card from "../ui/card";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/ultilities/formatCurrency";
import useAddToCart from "@/hooks/useAddToCart";

export default function ProductItem({product}: {product: Product}) {
    const router = useRouter()

    function showDetailHandler() {
        router.push('/products/' + product.id)
    }
    
    const handleAddToCart = useAddToCart(product)
    
    return (
        <div className="cursor-pointer">
            <Card>
                <div onClick={showDetailHandler} className="text-center h-5/6 p-2">
                    <img src={product.image} alt={product.title} className='h-[75%] m-auto'/>
                    <p>{product.title}</p>
                    <p>{formatCurrency(product.price)}</p>
                </div>
                <div className="text-center h-1/6 p-2">
                    <button 
                        type="submit" 
                        className="rounded-full bg-red-400 text-white py-1 px-5"
                        onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </Card>
        </div>
    )
}