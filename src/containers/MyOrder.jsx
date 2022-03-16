import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import { AppContext } from '@context/AppContext'
import { priceFormat } from '@utils/price.utils.js'
import '@styles/MyOrder.scss';

import iArrow from '@icons/flechita.svg'

const MyOrder = () => {
	const { state } = useContext(AppContext)
	const totalPrice = state.cart.reduce((a, { price }) => a + price, 0)

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={iArrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(e => <OrderItem product={e} key={`orderItem-${e.id}`} />)}				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>{priceFormat(totalPrice)}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;