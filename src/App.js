import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Theme from "./Theme"
import { createBrowserHistory } from 'history';
import { I18nextProvider } from "react-i18next";
import i18n from "./translations/i18n";

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
      <I18nextProvider i18n={i18n}>

    <Theme/>
    </I18nextProvider>
   
    </Provider>
  );
}
}


export default App;
