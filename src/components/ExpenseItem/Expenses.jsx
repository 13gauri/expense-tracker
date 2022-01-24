import { useState } from "react";
import "./Expenses.css";          
import Card from "./Card";   
import ExpensesFilter from "../../ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({expenseData}) => {
   
  const [filteredYear, setFilteredYear] = useState("2020");

  const updateFilterYear = (year) => {
    console.log("inside expenses");
     console.log(year);

     setFilteredYear(year);
  }

      let filteredRecords = expenseData.filter((exp) => {
        return exp.date.getFullYear().toString() === filteredYear.toString();
      });

      // console.log(filteredRecords);

      
    return(
        <Card className="expenses">
          <ExpensesFilter updateFilterYear={updateFilterYear} filteredYear={filteredYear} />
          <ExpenseChart filteredRecords={filteredRecords}/>
          <ExpensesList filteredRecords={filteredRecords} />
        </Card>
    );
}
 export default Expenses;