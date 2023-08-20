import React from 'react';
import { useState } from 'react';
import'./ExpenseForm.css';
const ExpenseForm=(props)=>{
    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
 
    // const [userInput,setUserInput] =useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    const titleChangeHandler =(event)=>{
        // setUserInput({
        //       ...userInput,
        //       enteredTitle: event.target.value,
        //     });
        setEnteredTitle(event.target.value);
        
        console.log(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        //   });
        console.log(event.target.value);
      };
    
      const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        //   });
        console.log(event.target.value);
      };
      const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log("Data from expenseForm component");
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
         setEnteredTitle('');
         setEnteredAmount('');
         setEnteredDate('');
      }
    return(
    <form onSubmit={submitHandler}> 
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input  type='text' onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input  onChange={amountChangeHandler} type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input onChange={dateChangeHandler} type='date'min='2019-01-01'max='2023-12-31'/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' >Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;