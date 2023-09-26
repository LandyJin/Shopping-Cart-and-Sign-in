import { useGenerationStore } from "@/models/states";
import { useCallback } from "react";
import { Button } from "react-bootstrap";

export default function ChangeItemQuantity({id}:{id: string}) {
    const generateStore = useGenerationStore();
    const cartItem = generateStore.cartItems.find(x => x.id === id);  
    const objIndex = generateStore.cartItems.findIndex((obj => obj.id === id));

    const addQuantityHandler = useCallback(() =>  {
        if (cartItem && cartItem.quantity != undefined) {
            let quantity = cartItem.quantity
            quantity++

            generateStore.cartItems[objIndex].quantity = quantity
            generateStore.setCartItems(
                generateStore.cartItems
            );
        }
        // console.log(generateStore.cartItems)
    },[generateStore])

    const reduceQuantityHandler = useCallback(() =>  {
        if (cartItem && cartItem.quantity != undefined && cartItem.quantity >= 0) {
            let quantity = cartItem.quantity
            quantity--

            generateStore.cartItems[objIndex].quantity = quantity
            generateStore.setCartItems(
                generateStore.cartItems
            );
        }
        // console.log(generateStore.cartItems)
    },[generateStore])

    const deleteItemHandler = useCallback(() =>  {
        generateStore.setCartItems(
            generateStore.cartItems.filter(a =>
                a.id !== id
            )
        );
        console.log(generateStore.cartItems)
    },[generateStore])

    if (cartItem) {
        return (
            <div className="">
                <Button onClick={addQuantityHandler} variant="outline-dark" className="mr-3">+</Button>
                    {cartItem.quantity}
                <Button onClick={reduceQuantityHandler} variant="outline-dark" className="ml-3">-</Button>
                <Button onClick={deleteItemHandler} variant="outline-danger" className="ml-3">DELETE</Button>
            </div>
        )
    }
}