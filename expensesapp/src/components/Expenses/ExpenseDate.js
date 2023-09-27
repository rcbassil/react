import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ myDate }) => {
  const expenseYear = myDate.toLocaleString("en-US", {
    year: "numeric",
  });

  const expenseMonth = myDate.toLocaleString("en-US", {
    month: "long",
  });

  const expenseDay = myDate.toLocaleString("en-US", {
    day: "numeric",
  });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  );
}

export default ExpenseDate;
