const { Client } = require('pg');

const createCalculationsTable = async (client) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS calculations (
      id SERIAL PRIMARY KEY,
      expression VARCHAR NOT NULL,
      result FLOAT NOT NULL
    )`;
  await client.query(sql);
};

const createCalculation = async (client, calculation) => {
  if (calculation.result === null || isNaN(calculation.result)) {
    throw new Error('Invalid calculation result');
  }
  
  const sql = "INSERT INTO calculations (expression, result) VALUES ($1, $2)";
  await client.query(sql, [calculation.expression, calculation.result]);
};

const getCalculations = async (client) => {
  const sql = "SELECT * FROM calculations";
  const result = await client.query(sql);
  return result.rows;
};

const clearCalculationsTable = async (client) => {
  const sql = "TRUNCATE TABLE calculations";
  await client.query(sql);
};

module.exports = { createCalculationsTable, createCalculation, getCalculations, clearCalculationsTable };
