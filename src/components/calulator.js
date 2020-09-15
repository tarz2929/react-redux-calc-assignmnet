import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addNewCalculator } from '../actions/calculator';

function Calculator(props) {

    const [inputA, setInputA] = useState('');
    const [inputB, setInputB] = useState('');
    const [operator, setOperator] = useState('addition');
    const [result, setResult] = useState('');
    const submit = e=> { 
        e.preventDefault();

        props.dispatch(addNewCalculator( setResult));

        switch(operator)
        {
            case "addition": 
                setResult(Number(inputA) + Number(inputB));
                break;
            case "subtraction":
                setResult(Number(inputA) - Number(inputB));
                break;
            case "multiplication":
                setResult(Number(inputA) * Number(inputB));
                break;
            case "division":
                setResult(Number(inputA) / Number(inputB));
                break;
            default:
        }



        // if (operator === "addition" )
        // { 
        //     setResult(Number(inputA) + Number(inputB));
        // }
        // else if (operator === "subtraction")
        // {
        //     setResult(Number(inputA) - Number(inputB));
        // }
        // else if (operator === "multiplication")
        // {
        //     setResult(Number(inputA) * Number(inputB));
        // }
        // else if (operator === "division")
        // {
        //     setResult(Number(inputA) / Number(inputB));
        // }
    }
    
    



    // const newValue = useState()
    // This.setState([this.state.name] = this.state.value);
    //  <p attr1="1" attr2="2"> </p>

 
    return (
        <div className="">
            <h1>Welcome to my Calculator !</h1>
            <form onSubmit={submit} >

                <label htmlFor="inputA">inputA:</label> 
                <input id="inputA" type="number"  value={inputA} onChange={e => setInputA(e.target.value)}></input>              

                <label htmlFor="operator">operator: </label>           
                <select id="operator" value= { operator} onChange={e => setOperator(e.target.value)} >
                    
                    <option value="addition"> +</option>
                    <option value="subtraction">- </option>
                    <option value="multiplication">* </option>
                    <option value="division"> / </option>
                </select>   

                <label htmlFor="inputB">inputB:</label> 
                <input id="inputB" type="number" value={inputB} onChange={e => setInputB(e.target.value)} ></input>
                <input type="submit"/>
                <input type="submit" value="Add to Results" />
            </form>

            <p>
                {result}

            </p>
        </div>

    );

}

export default connect(
    state => { return { Calculator: state}}
) (Calculator);