// Adding Caculator to reducers

const calculatorReducer =(state = [], action ) => {

    switch (action.type) {
        case 'ADD_NEW_CALCULATOR':
            const newTask ={
                task: action.payload
            }

            const newCalculator = [...state];

            newCalculator.push( newTask);

            return newCalculator;

            default:
                return state;
    }
}

export default calculatorReducer;

    