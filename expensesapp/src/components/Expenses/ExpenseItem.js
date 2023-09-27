import "./ExpenseItem.css";
import React, { useEffect, useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ expenseTitle, expensePrice, expenseDate }) => {
  const [myTitle, setTitle] = useState(expenseTitle);

  useEffect(() => {
    console.log(myTitle);
  }, [myTitle]);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <>
      <Card className="expense-item">
        {expenseDate ? <ExpenseDate myDate={expenseDate}></ExpenseDate> : null}
        <div className="expense-item__description">
          <h2>{myTitle}</h2>
          <div className="expense-item__price">{expensePrice}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </>
  );
};

export default ExpenseItem;
