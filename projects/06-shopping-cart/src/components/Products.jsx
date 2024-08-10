import './Products.css'
import { AddToCartIcon } from './Icons'

export function Products({ products }) {
    return (
        <main className="products">
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <img src={product.thumbnail} alt={product.title}></img>
                    </li>
                ))}
            </ul>
        </main >
    )
}