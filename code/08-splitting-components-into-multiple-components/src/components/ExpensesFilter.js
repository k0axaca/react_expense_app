import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    // could I have saved state in ExpensesFilter instead of in Expenses?
    const dropdownChangeHandler = event => {
        // call the onSaveSelectedYearHandler function from the parent component
        // and pass the selected year as an argument
        props.onChangeFilter(event.target.value);
    };
    
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='All Expenses'>All Expenses</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;


