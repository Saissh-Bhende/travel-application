const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Travel application listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello world!')
});
     