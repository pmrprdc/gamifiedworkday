import express from 'express';

const app = express();

app.use(express.json());

// Basic GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Basic POST route
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
