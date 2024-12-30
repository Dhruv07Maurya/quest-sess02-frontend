import React, { useState } from "react";
import Navbar2 from "./Navbar2";

const StudentProfile = () => {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Movies");

 
  const [expenses, setExpenses] = useState([
    {
      description: "Movies",
      amount: "$20",
      date: "2024-12-10",
      category: "Movies",
    },
    {
      description: "Groceries",
      amount: "$50",
      date: "2024-12-12",
      category: "Groceries",
    },
  ]);

  const addExpense = () => {
    const newExpense = {
      description,
      amount,
      date,
      category,
    };
    setExpenses([...expenses, newExpense]);
    setDescription("");
    setAmount("");
    setDate("");
    setCategory("Movies");
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const editExpense = (index) => {
    const expenseToEdit = expenses[index];
    setDescription(expenseToEdit.description);
    setAmount(expenseToEdit.amount);
    setDate(expenseToEdit.date);
    setCategory(expenseToEdit.category);

    deleteExpense(index);
  };

  return (
    <>
      <Navbar2 />
      <div className="student-profile-container">
        <h2 className="profile-title">Student Profile - Expense Tracker</h2>
        <div className="form-container">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Movies">Movies</option>
            <option value="Groceries">Groceries</option>
            <option value="Travel">Travel</option>
            <option value="Purchase">Purchase</option>
            <option value="Medical Emergency">Medical Emergency</option>
          </select>
          <button onClick={addExpense}>Add Expense</button>
        </div>
        <hr /> <br />
        <div className="expense-table-container">
          {expenses.length === 0 ? (
            <p>No expenses recorded.</p>
          ) : (
            <table className="expense-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date}</td>
                    <td>{expense.category}</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => editExpense(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => deleteExpense(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
