const express = require('express');
const delegateIdRouter = express.Router();
const db = require('../db');

delegateIdRouter.get('/last-delegate-id', (req, res) => {
  // SQL query to fetch the last generated ID from the delegate table
  const sql = 'SELECT MAX(id) AS lastDelegateId FROM delegate';

  // Execute the SQL query
  db.query(sql, (err, rows) => {
    if (err) {
      console.error('Error retrieving last delegate ID: ' + err.stack);
      res.status(500).send('Error retrieving last delegate ID');
      return;
    }

    // Extract the last generated ID from the result
    const lastDelegateId = rows[0].lastDelegateId;
    console.log('Last generated delegate ID:', lastDelegateId);

    // Respond with the last generated ID
    res.status(200).json({ lastDelegateId });
  });
});

module.exports = delegateIdRouter;