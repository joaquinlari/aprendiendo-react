import './Products.css'
import { AddToCartIcon } from './Icons'

export function Products({ products }) {
    return (
        <main className="products">
            <ul>
                {products.map(product => (
                    <li>
                        <h3>{products.name}</h3>
                        <p>{products.price}</p>
                        <img>{products.image}</img>
                    </li>
                ))}
            </ul>
        </main >
    )
}