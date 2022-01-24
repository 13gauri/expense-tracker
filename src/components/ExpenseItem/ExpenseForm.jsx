import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
 
    const [title, setTitle] = useState ("gauri");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
 

    // const updateTitle = (e) => {
    //     // setTitle("");
    //     setTitle(e.target.value);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

       
    const data = {
        id: Math.random().toString(),
        item: title,
        price: amount,
        date: new Date(date)
    }

    // console.log(data);
    props.sendData(data);

    // alert("Expense added");

    setTitle("");
    setAmount("");
    setDate("");

    props.setShowExpenseForm(false);

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>

                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
                </div>

                <div className="new-expense_control">
                    <label>Date</label>
                    <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
                </div>
            </div>

            <div className="new-expense_actions">
                <button type="button" onClick={() => props.setShowExpenseForm(false)} >Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
