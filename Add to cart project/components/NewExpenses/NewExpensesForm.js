import React, { useState } from 'react';
import './NewExpensesForm.css';

const NewExpensesForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


           //second + third way
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })


    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);

              //second way
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value})

              //third way
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: e.target.value}
        // })
        
    }
   
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value})
    }
    
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value})
    }
     
    const submitHandler= (event) => {
        //eti page e kono request na gele page reload kora rodh kore
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            price:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        //returns new value or empty value to useState or input
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
              <div className="new-expense__controls">
                 <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    type="text"
                    value={enteredTitle} 
                    onChange={titleChangeHandler}/>
                 </div>
                 <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
                 </div>
                 <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type="date" 
                    min="2019-01-01" 
                    max="2023-12-31" 
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                 </div>
              </div>
              <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                 </div>  
        </form>
    )
}
export default NewExpensesForm 