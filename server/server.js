const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const app = express();
const PORT = 3002;

app.use(express.static(path.join(__dirname,'../client/public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/:stock_id/suggestions', (req, res) => {  
  const newUrl = 'http://localhost:3000';
  request(`${newUrl}/api/${req.params.stock_id}/suggestions`).pipe(res);
});

app.get('/api/:stock_id/suggestions/:related_stock', (req, res) => {
  const newUrl = 'http://localhost:3000';
  request(`${newUrl}/api/${req.params.stock_id}/suggestions/2`).pipe(res);
});

app.get('/:stock_id/suggestions', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/public/index.html'));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));