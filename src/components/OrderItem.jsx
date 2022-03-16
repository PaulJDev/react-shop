import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import { priceFormat } from '@utils/price.utils.js'
import { AppContext } from '@context/AppContext'
import icon from '@icons/icon_close.png'

const OrderItem = ({ product }) => {
	const { title, images, price } = product
	const { removeFromCart } = useContext(AppContext)

	const handleRemove = product => removeFromCart(product)
	return (
		<div className="OrderItem">
			<figure>
				<img src={images.at(0)} alt={title} />
			</figure>
			<p>{title}</p>
			<p>{priceFormat(price)}</p>
			<img src={icon} onClick={() => handleRemove(product)} alt="close" />
		</div>
	);
}

export default OrderItem;