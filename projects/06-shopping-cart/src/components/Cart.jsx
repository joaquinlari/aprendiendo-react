import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/useCart";

export function Cart() {
    const cartCheckboxId = useId();

    function CartItem({ thumbnail, title, price, quantity, addToCart }) {
        <li>
            <img src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small onClick={addToCart}>
                    Qty: {quantity}
                </small>
                <button>+</button>
            </footer>
        </li>
    }

    const { cart, clearCart } = useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className="cart">
                <ul>
                    {CartItem}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}

