import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useStateValue } from './context/StateProvider';
import { auth } from './firebaseConfig/firebase';

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log('THE USER IS >>> ', authUser);

			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route exact path='/'>
						<Header />
						<Home />
					</Route>
					<Route path='/login' component={Login} />
					<Route path='/checkout'>
						<Header />
						<Checkout />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
