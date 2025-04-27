const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '',  
}));

app.get('/moods', (req, res) => {
  res.json({ moods: ['happy', 'sad', 'excited'] });
});

app.listen(5000, () => console.log('Server running on port 5000'));