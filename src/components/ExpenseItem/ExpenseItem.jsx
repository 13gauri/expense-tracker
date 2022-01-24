import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {

    let desc = props.expenseData.item;
    // const [desc, setDesc] = useState(props.expenseData.item);

     const clickHandler = () => {
        console.log(desc);
        desc = "updated!";
        console.log(desc);
        // setDesc("Updated!");
    }

    return(
    <Card className="expense_item">

        <ExpenseDate expenseData={props.expenseData} />

      <div className="expense-item_description">
          <h2>{desc}</h2>
      </div> 

      <div className="expense-item_price">
         $ {props.expenseData.price}
      </div> 
      {/* <div>
          <button onClick={clickHandler}> Change Title</button>
      </div> */}
    </Card>
    )
}
export default ExpenseItem;
