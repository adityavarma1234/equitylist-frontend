import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TransactionTable.css'; 

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Make an API request to your Rails backend to fetch transactions
    axios.get('http://localhost:4000/api/transactions') // Update the endpoint
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
