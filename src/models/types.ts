export type Product = {
    title: string;
    price: number;
    description: string;
    image: string;
    id: string;
}

export type CartItem = Product & {
    quantity?: number;
}

export type UserInfo = {
  name?: string,
  email?: string,
  image?: string
}