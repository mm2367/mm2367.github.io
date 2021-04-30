import React from 'react';
import {Link} from 'react-router-dom';

export const NavigationBar: React.FunctionComponent = () => {
    const headerTabs = ['Home', 'Resume', 'Sweet Sundays', 'Projects'].map((category) => {
        return (
            <li>
                <Link to={category === 'Home' ? '/' : category.replace(' ', '-')}>
                    {category}
                </Link>
            </li>
        );

    })
    return (

        <header className={'nav-bar d-flex align-items-center justify-content-center px-4 position-sticky top-0'}>
            <ul className={'d-flex justify-content-between'}>
                {headerTabs}
            </ul>
        </header>
    )
}
