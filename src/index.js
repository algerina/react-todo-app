/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
// component file
import TodoContainer from './components/TodoContainer';

// stylesheet
import './App.css';

ReactDOM.render(<React.StrictMode><TodoContainer /></React.StrictMode>, document.getElementById('root'));

const element = <h1>Hello from Create React App</h1>;

// ReactDOM.render(element, document.getElementById("root"))
