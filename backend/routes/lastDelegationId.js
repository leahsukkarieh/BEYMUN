const express = require('express');
const idRouter = express.Router();
const db = require('../db');

idRouter.get('/last-delegation-id', (req, res) => {
  // SQL query to fetch the last generated ID from the delegation table
  const sql = 'SELECT MAX(id) AS lastDelegationId FROM delegation';

  // Execute the SQL query
  db.query(sql, (err, rows) => {
    if (err) {
      console.error('Error retrieving last delegation ID: ' + err.stack);
      res.status(500).send('Error retrieving last delegation ID');
      return;
    }

    // Extract the last generated ID from the result
    const lastDelegationId = rows[0].lastDelegationId;
    console.log('Last generated delegation ID:', lastDelegationId);

    // Respond with the last generated ID
    res.status(200).json({ lastDelegationId });
  });
});

module.exports = idRouter;