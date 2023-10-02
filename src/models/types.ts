export type CreateProduct = {
  title: string;
  price: number;
  description: string;
  image: string;
}

export type Product = CreateProduct & {
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