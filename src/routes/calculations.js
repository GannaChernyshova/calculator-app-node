const express = require('express');
const Calculator = require('../calculator');
const { Client } = require('pg');
const { createCalculation, createCalculationsTable } = require('../database');

const router = express.Router();

router.post('/', async (req, res) => {
  const { expression } = req.body;
  try {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();
    await createCalculationsTable(client);
    
    const tokens = Calculator.parseExpression(expression);
    const result = Calculator.calculateExpression(tokens);
    await createCalculation(client, { expression, result });
    
    await client.end();

    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
