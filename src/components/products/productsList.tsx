import { Product } from '../../models/types';
import ItemAddedToCart from '../shoppingCart/ItemAddedToCart';
import ProductItem from './productItem';

export default function ProductsList({products}: {products: Product[]}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2">
            { products.map((product: Product) => (
                <ProductItem product={product} key={product.id}/>
            )) }
        </div>
    )
}