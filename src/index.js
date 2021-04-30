import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Posts from "./components/Posts";
import {Route} from "react-router";
import {Provider} from "react-redux";
import {store} from "./redux/store";

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route exact path={'/'} component={App}/>
        <Route path={'/posts'} component={Posts}/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
