import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from './Reducer';

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
