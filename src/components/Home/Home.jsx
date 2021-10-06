import React from 'react';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					alt='Amazon Prime Video banner'
					className='home__image'
				/>
				<div className='home__row'>
					<Product
						id='123456'
						title='The Lean Startup'
						price='29.99'
						image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
						rating={4}
					/>
					<Product
						id='23457'
						title='KitchenAid, KSM3316XCA Mini Stand Mixer, Candy Apple Red'
						price='499.00'
						image='https://m.media-amazon.com/images/I/818Ow7Awb7L._AC_UY218_.jpg'
						rating={5}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='345678'
						title='Activity Tracker'
						price='8.99'
						image='https://m.media-amazon.com/images/I/71CI0+oAMlS._AC_UX569_.jpg'
						rating={3}
					/>
					<Product
						id='345693'
						title='Echo Dot - 3rd Generation Speaker'
						price='21.99'
						image='https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_UY218_.jpg'
						rating={4}
					/>
					<Product
						id='345756'
						title='Samsung Galaxy Tab A 8.0" 4G LTE'
						price='184.00'
						image='https://m.media-amazon.com/images/I/51RScDZUEfL._AC_SL1000_.jpg'
						rating={3}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='5645892'
						title='30" Sceptre Curved 21:9 Gaming LED Monitor, UltraWide,Ultra Slim, HDMI DisplayPort, Build-in Speakers
						'
						price='246.03'
						image='https://m.media-amazon.com/images/I/71hlqZS61bL._AC_SX522_.jpg'
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
