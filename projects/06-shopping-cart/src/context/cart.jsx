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

                if (productInCartIndex >= 0) {
                    const newState = structuredClone(state)
                    newState[productInCartIndex].quantity += 1
                    return newState
                }

                return [
                    ...state,
                    {
                        ...actionPayload, //product
                        quantity: 1
                    }
                ]
            }

            case 'REMOVE_FROM_CART': {
                const { id } = actionPayload
                return state.filter(item => item.id !== id)
            }
            case 'CLEAR_CART': {
                return initialState
            }
        }

    }
}

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