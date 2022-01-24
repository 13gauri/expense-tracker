import React from 'react';
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props)=>  {
    if(props.filteredRecords.length === 0) {
    return <h2 className="expenses-list_fallback">No Data Found</h2>
    }

      
    return (
        <ul className="expenses-list">
            {
              props.filteredRecords.map(row => {
               return (
            <ExpenseItem key={row.id} expenseData={row} />
            )
        })
    }
        </ul>
    )
}

export default ExpensesList;
