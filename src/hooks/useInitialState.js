import { useState } from 'react'

const initalState = {
    cart: []
}

export const useInitialState = () => {
    const [state, setState] = useState(initalState)

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(({ id }) => id !== payload.id)
        })
    }

    return { state, addToCart, removeFromCart }
}



