const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const calculationsRouter = require('./routes/calculations');

dotenv.config();

const app = express();
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/calculate', calculationsRouter);

const startServer = () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
};

if (require.main === module) {
  startServer();
}

module.exports = app;
