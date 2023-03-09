import {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const [addingNewExpense, setAddingNewExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setAddingNewExpense(false);
    };

    const openFormHandler = () => setAddingNewExpense(true);
    const closeFormHandler = () => setAddingNewExpense(false);

    return (
            <div className="new-expense">
                {!addingNewExpense ? 
                    <button onClick={openFormHandler}>Add New Expense</button> :
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={closeFormHandler} />
                }
            </div>
    );    
};

export default NewExpense;