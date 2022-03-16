import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import { AppContext } from '@context/AppContext'
import { priceFormat } from '@utils/price.utils.js'
import iAddToCart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext)

	const handleClick = item => {
		addToCart(item);
	}

	const { title, price, images } = product
	
	return (
		<div className="ProductItem">
			<img src={images.at(0)} alt={title} />
			<div className="product-info">
				<div>
					<p>{priceFormat(price)}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={iAddToCart} alt="Add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;