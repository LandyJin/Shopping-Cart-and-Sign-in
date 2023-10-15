import { Product } from '@/models/types'
import { NextResponse } from 'next/server'

const DATA_SOURCE_URL: string = process.env.DATA_SOURCE_URL as string

export async function GET() {
    const res = await fetch(`${DATA_SOURCE_URL}/products`, {cache: 'no-cache'})

    const products: Product[] = await res.json()

    return NextResponse.json(products)
}

export async function POST(req: Request) {
    // console.log(req.json())
    const { title, price, description, image } = await req.json()

    if (!title || !price || !description || !image) return NextResponse.json({"message": "Missing data"})
    
    const res = await fetch(`${DATA_SOURCE_URL}/products`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ title, price, description, image })
    })

    const newProduct: Product = await res.json()

    return NextResponse.json(newProduct)
}