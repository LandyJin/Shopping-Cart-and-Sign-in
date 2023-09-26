import { Offcanvas } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useGenerationStore } from "@/models/states";
import { useCallback } from "react";
import CartItem from "./cartItem";
import Link from "next/link";
import { Product } from "@/models/types";

export default function ItemAddedToCart() {
    const generationStore = useGenerationStore();

    const handleClose = useCallback(() => {
        generationStore.setIsOpenCart(false)
    },[generationStore.isOpenCart])

    const addedItem = generationStore.addedItem
    // console.log(generationStore.cartItems)

    return (
        <Offcanvas show={generationStore.isOpenCart} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Item Added to Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               {addedItem != undefined && <CartItem product={addedItem}/>}
                <Link href='/shoppingcart'> 
                    <div className="rounded-full bg-black w-full m-2 p-2 text-center">
                        View Cart
                    </div>
                </Link>
            </Offcanvas.Body>
        </Offcanvas>
    )
}