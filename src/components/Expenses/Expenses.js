import {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const items = props.expenses;

    const [filterYear, setFilterYear] = useState('2022');
    
    const filterByYearHandler = (year) => {
       setFilterYear(year);
       console.log(year); 
    };
    
    return (
            <Card className="expenses">
                <ExpensesFilter selectedYear={filterYear} onFilterByYear={filterByYearHandler}/>
                <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date} />
                <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date} />
                <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date} />
                <ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date} />
            </Card>
    );
}

export default Expenses;