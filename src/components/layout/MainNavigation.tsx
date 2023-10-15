"use client"
import Link from "next/link";
import classes from './MainNavigation.module.css';
import { useGenerationStore } from '@/models/states';
import { useEffect } from 'react';
import ItemAddedToCart from "../shoppingCart/ItemAddedToCart";
import { UserInfo } from "@/models/types";
import Usercard from "../ui/userscard";

export default function MainNavigation ({userInfo}: {userInfo?: UserInfo}) {
    const generationStore  = useGenerationStore()

    useEffect(() => {
        generationStore.setCartItems(JSON.parse(localStorage.getItem('cartItems') || '[]'))
        async function fetchAPI() {
            // fetch Next API
            const response = await fetch(
                'http://localhost:3000/api/products'
            ).then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('error ' + res.status)
                }
            })
            generationStore.setProducts(response)
        }
        fetchAPI()
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(generationStore.cartItems))
    }, [generationStore.cartItems])

    return (
        <header className={classes.header}>
            {/* {generationStore.products[0].price} */}
            <Link href='/' className="text-3xl text-white font-bold">Shopping system</Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/shoppingcart'>
                            <div className="w-10 h-10 relative text-[#77002e] hover:bg-white p-2 bg-[#fcb8d2] rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    fill="currentColor"
                                >
                                    <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                                </svg>
                                <div
                                    className="rounded-full bg-red-500 d-flex justify-content-center align-items-center"
                                    style={{
                                        color: "white",
                                        width: "1.5rem",
                                        height: "1.5rem",
                                        position: "absolute",
                                        bottom: 0,
                                        right: 0,
                                        transform: "translate(25%, 25%)",
                                    }}
                                >
                                    {generationStore.cartItems.length}
                                </div>
                            </div>
                        </Link>
                    </li>
                    {userInfo &&(
                        <>
                            <li>
                                <Usercard userInfo={userInfo}/>
                            </li>
                            <li>
                                <Link href='/products/create'>Add a product</Link>
                            </li>
                        </>
                    )}
                    <li>
                        {userInfo ? 
                            <Link href='/api/auth/signout'>Sign out</Link> :
                            <Link href='/api/auth/signin'>Admin sign in</Link>
                        }
                    </li>
                </ul>
            </nav>
            <ItemAddedToCart/>
        </header>
    )
}