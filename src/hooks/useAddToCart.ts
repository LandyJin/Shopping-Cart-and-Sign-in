import { CartItem } from './../models/types';
import { useGenerationStore } from '@/models/states';
import { useCallback } from 'react';

export default function useAddToCart(product?: CartItem) {
    const generationStore = useGenerationStore()
    return useCallback(() => {
        if (product != undefined)
        {
            if (generationStore.cartItems.length !== 0 && 
                generationStore.cartItems.some(item => item.id == product.id))
            {
                const modifyCartItem = generationStore.cartItems.map(cartItem => {
                    if (cartItem.id == product.id && cartItem.quantity !== undefined) {
                        generationStore.setAddedItem({...cartItem, quantity: cartItem.quantity + 1})
                        return {...cartItem, quantity: cartItem.quantity + 1}
                    }
                    return cartItem
                })
                generationStore.setCartItems(modifyCartItem)
            }
            else{
                product.quantity = 1;
                generationStore.setCartItems([...generationStore.cartItems, product]);
                generationStore.setAddedItem(product)
            }
            generationStore.setIsOpenCart(true)
        }
        
    },[generationStore, product])
}