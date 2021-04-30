import React from 'react';
import ReactDOM from 'react-dom';
import {AppRoutes} from "./AppRoutes";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';

ReactDOM.render(<React.StrictMode><AppRoutes/></React.StrictMode>, document.getElementById('root'));
