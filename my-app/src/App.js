import './App.css';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom';
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import {persist, store} from './redux/store/store';
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                <main>
                    <BrowserRouter history={history}>
                        <Switch>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/" component={Home}/>
                        </Switch>
                    </BrowserRouter>
                </main>
            </PersistGate>
        </Provider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('app')
)

export default App;
