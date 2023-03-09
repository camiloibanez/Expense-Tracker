import {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2022');
    
    const filterByYearHandler = (year) => {
       setFilterYear(year);
    };    

    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filterYear);

    return (
            <Card className="expenses">
                <ExpensesFilter selectedYear={filterYear} onFilterByYear={filterByYearHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
    );
}

export default Expenses;