import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredAmount, setEnteredAmount] = useState("");
  //const [enteredDate, setEnteredDate] = useState("");

  const [myValidation, setMyValidation] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  //const titleChangeHandler = (event) => {
  //setEnteredTitle(event.target.value);
  //setUserInput({
  //  ...userInput,
  //  enteredTitle: event.target.value,
  //});

  // let myInput = event.target.value;

  // if (myInput.length === 0 || myInput.length >= 3) {
  //   setMyValidation("");
  // } else if (myInput.length < 3) {
  //   setMyValidation(
  //     "Invalid title. The title should contain at least 3 characters."
  //   );
  // }

  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  // });
  //};

  //const amountChangeHandler = (event) => {
  //setEnteredAmount(event.target.value);
  //setUserInput({
  //  ...userInput,
  //  enteredAmount: event.target.value,
  //});
  //  setUserInput((prevState) => {
  //    return { ...prevState, enteredAmount: event.target.value };
  //  });
  //};

  //const dateChangeHandler = (event) => {
  //setEnteredDate(event.target.value);
  //setUserInput({
  //  ...userInput,
  //  enteredDate: event.target.value,
  //});
  //  setUserInput((prevState) => {
  //    return { ...prevState, enteredDate: event.target.value };
  //  });
  //};

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      let myInput = value;

      if (myInput.length === 0 || myInput.length >= 3) {
        setMyValidation("");
      } else if (myInput.length < 3) {
        setMyValidation(
          "Invalid title. The title should contain at least 3 characters."
        );
      }

      setUserInput((prevState) => {
        return { ...prevState, enteredTitle: value };
      });
    } else if (identifier === "amount") {
      setUserInput((prevState) => {
        return { ...prevState, enteredAmount: value };
      });
    } else if (identifier === "date") {
      setUserInput((prevState) => {
        return { ...prevState, enteredDate: value };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    console.log(expenseData);

    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min={"0.01"}
            step={"0.01"}
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min={"2019-01-01"}
            max={"2023-12-31"}
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      <p>{myValidation}</p>
    </form>
  );
};

export default ExpenseForm;
