import { createContext, useState, useReducer } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    /* const [cart, setCart] = useState([]) */

    const initialState = []

    const reducer = (state, action) => {
        const { type: actionType, payload: actionPayload } = action
        switch (actionType) {
            case 'ADD_TO_CART': {
                const { id } = actionPayload
                const productInCartIndex = state.findIndex(item => item.id === id)
            }
            case 'REMOVE_CART':
            case 'CLEAR_CART':

        }
    }
    /* const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    } */

    /*  const removeFromCart = product => {
         setCart(prevState => prevState.filter(item => item.id !== product.id))
     }
 
     const clearCart = () => {
         setCart([])
     } */
    return (
        <CartContext.Provider value={{
            state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )

}