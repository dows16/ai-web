//These are for importing the react modules nessecary for this script below.
import ReactDOM from 'react-dom';
import React from 'react'
//I need to import the "App.js" file since it's where I have all the base stuff I need for the website, which includes my gradient background color, all the files/components I need to build the website.
import App from './App';
//I need to import the "index.css" file which has all the gradient colors and font styles I need for the website.
import './index.css';
//"document.querySelector" returns the first Element within the document that matches the specified selector, or group of selectors.
ReactDOM.render(<App />, document.querySelector("#root"));