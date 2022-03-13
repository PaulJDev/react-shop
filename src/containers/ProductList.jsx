import React from 'react';
import ProductItem from '@components/ProductItem';
import { useGetProducts } from '@hooks/useGetProducts.js'
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	const products = useGetProducts(API)
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(e => <ProductItem product={e} key={e.id} />).slice(0, 5)}	
			</div>
		</section>
	);
}

export default ProductList;