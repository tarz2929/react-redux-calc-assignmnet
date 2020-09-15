import React from 'react';
import { connect } from 'react-redux';
import calulator from './calulator';

function CalculatorHistory ( props )
{
  return (
    <>
      <h2>CalculatorHistory</h2>
      <ul>
        {props.calculator.map( ( calculator, index ) => <li key={index}>{calulator.task}</li> )}
      </ul>
    </>
  );
}

// Use connect to make our "To-Do list" available via props.toDos.
export default connect( state => ( { calculator: state } ) )( CalculatorHistory );