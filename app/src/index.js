import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './components/profile/Profile';
import Register from './components/authentification/register/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {persist, store} from './redux/store/store';
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const Root = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persist}>
				<main>
					<BrowserRouter history={history}>
						<Switch>
							<Route exact path="/" component={App} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/register" component={Register} />
						</Switch>
					</BrowserRouter>
				</main>
			</PersistGate>
		</Provider>
	)
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
