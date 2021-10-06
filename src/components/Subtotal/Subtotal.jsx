import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../context/StateProvider';
import { getBasketTotal } from '../../context/Reducer';
import './Subtotal.css';

const Subtotal = () => {
	const history = useHistory();
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal({basket?.length} items): <strong>{value}</strong>
						</p>
						<small className='subtotal__gift'>
							<label htmlFor='checkbox' className='subtotal__gift--checkbox' />
							<input id='checkbox' type='checkbox' />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button onClick={(e) => history.push('/payment')}>
				Proceed to Checkout
			</button>
		</div>
	);
};

export default Subtotal;
