const { Client } = require('pg');
const { PostgreSqlContainer } = require('@testcontainers/postgresql');
const { createCalculationsTable, createCalculation, getCalculations, clearCalculationsTable } = require('../src/database');

describe('Calculations Database', () => {
  jest.setTimeout(60000); // Increase timeout to 2 minutes

  let postgresContainer;
  let client;

  beforeAll(async () => {
    postgresContainer = await new PostgreSqlContainer().start();
    client = new Client({ connectionString: postgresContainer.getConnectionUri() });
    await client.connect();
    await createCalculationsTable(client);
  });

  afterAll(async () => {
    await client.end();
    await postgresContainer.stop();
  });

  beforeEach(async () => {
    await clearCalculationsTable(client);
  });

  it('should create and retrieve a calculation', async () => {
    const calculation = { expression: '2+3', result: 5 };
    await createCalculation(client, calculation);

    const calculations = await getCalculations(client);
    expect(calculations).toEqual([{ id: expect.any(Number), expression: '2+3', result: 5 }]);
  });

  it('should handle invalid calculation result', async () => {
    const calculation = { expression: '10/0', result: null };

    try {
      await createCalculation(client, calculation);
    } catch (error) {
      expect(error.message).toContain('Invalid calculation result');
    }

    const calculations = await getCalculations(client);
    expect(calculations).toEqual([]);
  });
});
