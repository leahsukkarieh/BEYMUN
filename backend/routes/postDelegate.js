
const express = require('express');
const delegateRouter = express.Router();
const { query } = require('../db');

// Route to handle form submission
delegateRouter.post('/post-delegate', async (req, res) => {
  const formData = req.body;

  // SQL query to insert form data into database table
  const sql = 'INSERT INTO delegate SET ?';

  try {
    // Execute the SQL query
    await query(sql, formData);
    console.log('Form data inserted into database successfully');
    res.status(200).send('Form data inserted into database');
  } catch (error) {
    console.error('Error inserting data into database:', error);
    res.status(500).send('Error inserting data into database');
  }
});

module.exports = delegateRouter;