const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
