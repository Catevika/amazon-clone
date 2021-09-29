import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Checkout = () => {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className='checkout'>
			<div className='checkout-left'>
				<img
					src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
					alt='ocean Credit Card Ad banner'
					className='checkout__ad'
				/>
				<h2 className='checkout__title'>Your Shopping Basket</h2>
				{basket.map((item) => (
					<CheckoutProduct
						id={item.id}
						image={item.image}
						title={item.title}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>
			<div className='checkout-right'>
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
