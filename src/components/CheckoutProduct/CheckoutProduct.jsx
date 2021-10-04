import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import './CheckoutProduct.css';
import StarRateIcon from '@mui/icons-material/StarRate';

const CheckoutProduct = ({ id, title, price, rating, image }) => {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id
		});
	};

	return (
		<div className='checkoutProduct'>
			<img src={image} alt='Product image' className='checkoutProduct__image' />
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
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
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
