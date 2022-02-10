import React from 'react';
import ReactDOM from 'react-dom';
import "./castom.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "./App.js";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


