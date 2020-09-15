import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Calculator from './components/calulator'
import { createStore } from 'redux';
import calculatorReducer from './reducers/calculator';
import { addNewCalculator } from './actions/calculator';
import { Provider } from 'react-redux';
import Calculator from './components/calulator';

const store = createStore(calculatorReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe( () => console.log( store.getState() ) );

store.dispatch( addNewCalculator ("Research Redux") );
store.dispatch( addNewCalculator( "Review React"));


ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>,

  
  document.getElementById('root')
);