import {ValueType} from 'react-select';
import * as React from "react";
import {Button} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {translations} from "./websiteTexts";
import CSSTransition from "react-transition-group/CSSTransition";
import {Link} from "react-router-dom";

export interface DropDownOption {
    label: string;
    value: string
    to?: string;
}

export interface DropdownProps {
    options: DropDownOption[];
    className?: string;
    placeholder?: string;
    height?: number;
    inputId?: string;

    onChange(value: ValueType<DropDownOption, false>): void;
}

export const NavBarDrawer: React.FunctionComponent = (props) => {
    const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
    const navDropdownRef = React.createRef<HTMLButtonElement>();
    const arrowDownRef = React.createRef<SVGSVGElement>();

    //

    React.useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            const isNotDrawerClick = (navDropdownRef.current && (!navDropdownRef.current.contains(e.target as Node)));
            const isNotArrowClick = (arrowDownRef.current && (!arrowDownRef.current.contains(e.target as Node)));
            if (isNotArrowClick && isNotDrawerClick) {
                setDrawerOpen(false)
            }
        };
        window.addEventListener('click', handleOutsideClick);
        return () => {
            window.removeEventListener('click', handleOutsideClick)
        }
    }, );
    return (
        <Button onClick={() => setDrawerOpen(!drawerOpen)} ref={navDropdownRef}
                className={'w-100 d-flex align-items-center'}>
            {'Projects'}
            <ArrowDropDownIcon ref={arrowDownRef}/>
            <CSSTransition in={drawerOpen} timeout={250} classNames={'menu-primary'} unmountOnExit>
                <Link
                    className={'nav-bar_projects-dropDown position-absolute d-flex justify-content-center'}
                    to={'cost-of-living'}>
                    <li className={'w-100 d-flex nav-bar_drawerCanvas mt-2'}>
                        {translations.costOfLivingText.projectName}
                    </li>
                </Link>
            </CSSTransition>
        </Button>
    )
}
