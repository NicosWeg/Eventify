const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT;

app.use(cors());
app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/health', (req, res) => {
  res.send({'status': 'ok'});
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
