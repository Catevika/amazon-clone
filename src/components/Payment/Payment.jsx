import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css';

const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div>
			<div className='payment__container'>
				<h1>
					Checkout:
					<Link to='/checkout'>
						{basket.length <= 1
							? ` ${basket.length} item`
							: ` ${basket.length} items`}
					</Link>
				</h1>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment__items'>
						{basket.map((item, index) => (
							<CheckoutProduct
								id={item.id}
								key={index}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					{/* Stripe magic */}
				</div>
			</div>
		</div>
	);
};

export default Payment;
