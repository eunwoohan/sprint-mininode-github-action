const express = require('express')
const app = express()
const port = 4000;
const ip = 'localhost';
const cors = require('cors');

app.use(cors());

app.use(express.json({"strict":false}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upper', (req, res) => {
	let data = req.body.toUpperCase();
	res.json(data);
})


app.post('/lower', (req, res) => {
	let data = req.body.toLowerCase();
	res.json(data);
})


app.listen(port, () => {
  console.log(`Example app listening on http://${ip}:${port}`)
})
