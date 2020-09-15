import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Calculator from './components/calulator'
import { createStore } from 'redux';
import calculatorReducer from './reducers/calculator';
import { addNewCalculator } from './actions/calculator';
import { Provider } from 'react-redux';

const store = createStore(calculatorReducer);

store.subscribe( () => console.log( store.getState() ) );

store.dispatch( addNewCalculator ("Research Redux") );
store.dispatch( addNewCalculator( "Review React"));


ReactDOM.render(
  <React.StrictMode>
    <></>
    
  </React.StrictMode>,
  document.getElementById('root')
);