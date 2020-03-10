import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Pages/Home"
import Theme from "./Theme"
import Navigation from './Components/Pages/Navigation';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import { Button } from 'react-bootstrap';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware)
  );





class App extends React.Component {

render(){
  return (
    <Provider store={store}>   
    <Theme/>
    </Provider>
  );
}
}


export default App;
