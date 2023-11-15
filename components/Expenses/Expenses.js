import React, { useState } from 'react';
import Card from '../UI/card.js';
import './Expenses.css';
import ExpensesChart from './ExpensesChart.js';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';

function Expenses (props){
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
      // ekhane if er vitorer ongsho silo ja ExpensesList e chole gese

    return (
        <Card className="expenses">
             <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
             <ExpensesChart expenses={filteredExpenses}/>
               <ExpensesList items={filteredExpenses}/>

               {/* if er vitorer ongsho evabeo lekha jay  */}

             {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p> }
             {filteredExpenses.length > 0 && (filteredExpenses.map((expense) => (
               <ExpenseItem 
               key={expense.id}
               title={expense.title} 
               price={expense.price} 
               date={expense.date}/>))) } */}
               
          
    </Card>
    )
}
export default Expenses
