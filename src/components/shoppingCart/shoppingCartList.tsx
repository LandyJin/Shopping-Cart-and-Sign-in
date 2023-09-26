'use client'
import { useGenerationStore } from "@/models/states"
import { CartItem as ProductItem } from "@/models/types"
import CartItem from "./cartItem"
import ChangeItemQuantity from "./changeItemQuantity"

export default function ShoppingCartList() {
    const generationStore = useGenerationStore()
    return (
        <>
            { generationStore.cartItems.length != 0 ? 
                generationStore.cartItems.map((cartItem: ProductItem) => (
                    <CartItem key={cartItem.id} product={cartItem}>
                        {
                            cartItem.quantity !== undefined &&
                            (<ChangeItemQuantity id={cartItem.id}/>)
                        }
                    </CartItem>
                )) : (
                    <p>There's nothing in the cart</p>
                )
            }
        </>
    )
}