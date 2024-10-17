const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // ou '*'
}));


app.post('/people', (req, res) => {
  
});

app.listen(8080, () => {});
