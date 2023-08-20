import React from'react';
import ExpenseForm from'./ExpenseForm';
import'./NewExpense.css';
const  NewExpense=(props)=>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    console.log("data received through child")
    props.onAddExpense(expenseData);
}
  return(
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};
export default NewExpense;