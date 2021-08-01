import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import './utils/colorSwitch.js';
import './utils/colorSwitch.ts';

// ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
