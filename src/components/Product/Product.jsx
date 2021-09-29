import React from 'react';
import './Product.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useStateValue } from '../../context/StateProvider';

const Product = ({ title, price, rating, image }) => {
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		dispatch({
			type: 'ADD TO BASKET',
			id: id,
			title: title,
			price: price,
			rating: rating,
			image: image
		});
	};

	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>
								<StarRateIcon />
							</p>
						))}
				</div>
			</div>
			<img src={image} alt={`${title} Book cover`} />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
};

export default Product;
