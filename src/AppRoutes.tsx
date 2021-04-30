import * as React from 'react';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {NavigationBar} from "./NavigationBar";
import {applyMiddleware, compose, createStore} from "redux";
import {loadingReducer} from "./LoadingReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import CostOfLiving from "./CostOfLiving";
import LoadingSpinner from "./LoadingSpinner";
import {InteractiveResume} from "./InteractiveResume";
import {Home} from "./Home";
import {SweetSundaysRoutes} from "./SweetSundaysRoutes";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
    }
}
export const initializeStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(loadingReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
};
export const AppRoutes = () => {

    return (
        <Provider store={initializeStore()}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <NavigationBar/>
                <LoadingSpinner/>
                <Route exact={true} path={'/'} component={Home}/>
                <Route exact path={'/projects'} component={CostOfLiving}/>
                <Route exact path={'/resume'} component={InteractiveResume}/>
                <Route exact path={'/sweet-sundays'} component={SweetSundaysRoutes}/>
            </BrowserRouter>
        </Provider>

    )
};
