import { useState, useEffect } from 'react'

export const useGetProducts = (API) => {
    const [products, setProducts] = useState([])

	useEffect(() => {
		fetch(API)
		.then(res => res.json())
		.then(res => {
			setProducts(res)
		})
		
	}, [])


    return products ;
}