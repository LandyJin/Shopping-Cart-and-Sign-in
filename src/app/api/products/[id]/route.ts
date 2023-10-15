import { Product } from '@/models/types'
import { NextResponse } from 'next/server'

const DATA_SOURCE_URL: string = process.env.DATA_SOURCE_URL as string

export async function GET(req: Request) {
    const id = req.url.slice(req.url.lastIndexOf("/") + 1)

    const res = await fetch(`${DATA_SOURCE_URL}/products/${id}`)

    const product: Product = await res.json()

    if (!product.id) return NextResponse.json({"message": "Product not found"})

    return NextResponse.json(product)
}