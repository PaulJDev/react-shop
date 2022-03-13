import React, { useState } from 'react';
import '@styles/ProductItem.scss';

import iAddToCart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	console.log(product)
	const [cart, setCart] = useState([])
	const handleClick = () => {
		setCart([]);
	}
	const price = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(product.price)
	return (
		<div className="ProductItem">
			<img src={product.images.at(0)} alt={product.title} />
			<div className="product-info">
				<div>
					<p>{price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick} >
					<img src={iAddToCart} alt="Add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;