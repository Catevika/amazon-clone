import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { auth } from '../../firebaseConfig/firebase';

const Header = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	console.log(basket);

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className='header'>
			<Link to='/'>
				<img
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
					alt='Amazon logo'
					className='header__logo'
				/>
			</Link>
			<div className='header__search'>
				<label htmlFor='search' className='header__search--label' />
				<input
					type='text'
					id='search'
					placeholder='Search'
					className='header__searchInput'
				/>
				<SearchIcon className='header__searchIcon' />
			</div>
			<div className='header__nav'>
				{user ? (
					<Link to='/'>
						<div className='header__option' onClick={handleAuthentication}>
							<span className='header__optionLineOne'>
								Hello {`${user.email}`}
							</span>
							<span className='header__optionLineTwo'>Sign Out</span>
						</div>
					</Link>
				) : (
					<Link to={'/login'}>
						<div className='header__option' onClick={handleAuthentication}>
							<span className='header__optionLineOne'>Hello Guest</span>
							<span className='header__optionLineTwo'>Sign In</span>
						</div>
					</Link>
				)}
				<div className='header__option'>
					<span className='header__optionLineOne'>Returns</span>
					<span className='header__optionLineTwo'> &amp; Orders</span>
				</div>
				<div className='header__option'>
					<span className='header__optionLineOne'>Your</span>
					<span className='header__optionLineTwo'>Prime</span>
				</div>
				<Link to='/checkout'>
					<div className='header__optionBasket'>
						<ShoppingBasket />
						<span className='header__optionLineTwo header__basketCount'>
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
