import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/checkout' component={Checkout} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
