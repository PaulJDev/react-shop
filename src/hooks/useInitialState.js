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

    return { state, addToCart }
}



