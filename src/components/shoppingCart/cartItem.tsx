import { CartItem, Product } from "@/models/types";
import { formatCurrency } from "@/ultilities/formatCurrency";
import React, { useState, useEffect } from "react";

export default function CartItem({
    product, 
    children
}: {
    product: CartItem, 
    children?: React.ReactNode
}) {
    const [element, setElement] = useState<string | React.ReactNode>('')

    // console.log(React.Children.count(children))
    const isChildrenIncluded = React.Children.count(children) === 0

    useEffect(() => {
        isChildrenIncluded ? setElement('') : setElement(children)
    }, [])
    return (
        <div className="grid grid-cols-4 gap-y-3">
            <img src={product.image} alt={product.title} className='h-[70px] m-auto'/>
            <div className="col-span-2 ">
                <h3>{product.title}</h3>
                <p>{formatCurrency(product.price)}</p>
            </div>
            {element}
        </div>
    )
}