import React from 'react';
import {Link} from 'react-router-dom';
import {NavBarDrawer} from "./Dropdown";

export const NavigationBar: React.FunctionComponent = () => {
    const headerTabs = ['Home', 'Resume', 'Sweet Sundays'].map((category) => {
        return (
            <li>
                <Link to={category === 'Home' ? '/' : category.replace(' ', '-')}>
                    {category}
                </Link>
            </li>
        );

    });
    const projectsDropDown= (
        <li>
        <NavBarDrawer />
        </li>
    );
    headerTabs.push(projectsDropDown);
    return (

        <header className={'nav-bar d-flex align-items-center justify-content-center px-4 position-sticky top-0'}>
            <ul className={'d-flex justify-content-between align-items-center'}>
                {headerTabs}
            </ul>
        </header>
    )
};
