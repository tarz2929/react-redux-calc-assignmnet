// const { default: Calculator } = require("../components/calulator");


const addNewCalculator = calculatorContent => {
    return {

        type: 'ADD_NEW_CALCULATOR',

        payload: calculatorContent
    };
} 

export { addNewCalculator};
