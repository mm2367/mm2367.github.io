import * as React from "react";
import {Route} from 'react-router';
import {SweetSundays} from "./SweetSundays";
import {RecipeComponent} from "./recipeComponent";
import {BrowserRouter} from "react-router-dom";


export const SweetSundaysRoutes: React.FunctionComponent = () => {
    return (
        <div className={'sweet-sundays'}>
            <BrowserRouter basename={'/personal-website-initial/'}>
                <h1 className={'d-flex justify-content-center align-items-center my-4'}>Sweet Sundays</h1>
                <Route exact={true} path={'/sweet-sundays'} component={SweetSundays}/>
                <Route path={'/sweet-sundays/oatmeal-cookies'} component={RecipeComponent}/>
            </BrowserRouter>
        </div>
    )
};
