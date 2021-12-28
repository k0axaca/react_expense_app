import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('All Expenses');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        // why do filteredYear and selectedYear have different values? 
    }
    const filteredExpenses = props.expenses.filter(expense => {
        if (filteredYear === 'All Expenses') {
            return true;
        } else {
            return expense.date.getFullYear() === parseInt(filteredYear);
        }
    });
    const expenseList = filteredExpenses.map(expense => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    });
    // make a function with the unfiltered expenses, and set that as the default value for the expenses variable
    // then, make a function with the filtered expenses, and set that as the value for the expenses variable
    return (
        <div>
            <Card className='expenses'>
                {/* using selected here is called 'double binding' or 'two-way binding'*/}
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                {filteredExpenses.length === 0 || props.expenses.length === 0 ? (
                    <h2>No expenses found.</h2>
                ) : expenseList}
            </Card>
        </div>
    );
};

export default Expenses;