import { useState } from 'react';
import './App.css';
import Expenses from "./components/ExpenseItem/Expenses";
import NewExpense from './components/ExpenseItem/NewExpense';


  // const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const dummyData = [
    {
      id: "exp1",
      date: new Date(2021, 5, 12),
      item: "New TV",
      price: 799.49
    },
    {
      id: "exp2",
      date: new Date(2021, 2, 12),
      item: "Car Insurance",
      price: 294.76
    },
    {
      id: "exp3",
      date: new Date(2021, 2, 28),
      item: "New Desk(Wooden)",
      price: 450
    },
    {
    id: "exp4",
      date: new Date(2022, 3, 28),
      item: "New phone",
      price: 50.01
    }
  ];

     function App () {

      const [expenseData, setExpenseData] = useState(dummyData);
    //  console.log(expenseData);
    //  console.log(expenseData[0]);

     const getNewExpenseRecord = (data) => {
      console.log("printed  from app.js =>");
      console.log(data);

      // expenseData.push(data);
      setExpenseData(prev => [data, ...prev]);
    }
  
  return (
      <div>
        <NewExpense  readExpenseData={getNewExpenseRecord}/>
        <Expenses expenseData={expenseData} />
      </div>
  );
}

export default App;
