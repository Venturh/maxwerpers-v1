import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Theme from "./Theme"
import { createBrowserHistory } from 'history';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware)
  );





class App extends React.Component {

render(){
  const history = createBrowserHistory();
  return (
    <Provider store={store}>   

    <Theme/>
   
    </Provider>
  );
}
}


export default App;
