import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/useCart";

export function Cart() {
    const cartCheckboxId = useId();

    const { cart, clearCart } = useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img src="src\assets\iphone.jpg"
                            alt='Iphone 15'
                        />
                        <div>
                            <strong>Iphone 15 Pro</strong> - $1.499
                        </div>
                        <footer>
                            <small>Qty: 1</small>
                        </footer>
                    </li>
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}

