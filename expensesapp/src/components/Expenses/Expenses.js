import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ myExpenses }) => {
  return (
    <Card className="expenses">
      {myExpenses.map((expense) => (
        <ExpenseItem key={expense.id}
          expenseTitle={expense.title}
          expensePrice={expense.amount}
          expenseDate={expense.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
