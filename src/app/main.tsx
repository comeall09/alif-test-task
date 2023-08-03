import './global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';

import { App } from './App';
import { store } from './store';

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<App />
		</StoreProvider>
	</React.StrictMode>
);