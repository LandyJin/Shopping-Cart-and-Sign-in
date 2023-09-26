import { Product, CartItem } from './types';
import { create } from "zustand";

interface GenerationState {
    products: Product[]
    setProducts: (products: Product[]) => void
    isOpenCart: boolean
    setIsOpenCart: (isOpenCart: boolean) => void
    cartItems: CartItem[]
    setCartItems: (cartItems: CartItem[]) => void
    addedItem: CartItem | undefined
    setAddedItem: (addedItem: CartItem) => void
}

export const useGenerationStore = create<GenerationState>() ((set) => ({
    products: [],
    setProducts: (products: Product[]) => set({ products }),
    isOpenCart: false,
    setIsOpenCart: (isOpenCart: boolean) => set({ isOpenCart }),
    cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    setCartItems: (cartItems: CartItem[]) => set({ cartItems }),
    addedItem: undefined,
    setAddedItem: (addedItem: CartItem) => set({ addedItem })
}))
