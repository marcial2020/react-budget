import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuid } from "uuid";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1000 },
  { id: uuid(), charge: "car payment", amount: 300 },
  { id: uuid(), charge: "credit card bill", amount: 1400 },
];

console.log(initialExpenses);
//import useState()
//function return [] with two values
//the actual value of the state
//function for updates/control
//default value

function App() {
  // ****** state values****
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  //sinle amount
  const [amount, setAmount] = useState("");

  // **** funtionality****
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          ${" "}
          {expenses.reduce((a, c) => {
            return (a += c.amount);
          }, 0)}{" "}
        </span>
      </h1>
    </>
  );
}

export default App;
