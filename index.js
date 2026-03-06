const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/transcript', async (req, res) => {
  try {
    const { videoId } = req.query;
    const response = await fetch(`https://youtube-transcript3.p.rapidapi.com/api/transcript?videoId=${videoId}`, {
      headers: {
        'x-rapidapi-key': '6cc0c92c40msh7efb9f5f94a7c15p165fefjsn39b531e3e222',
        'x-rapidapi-host': 'youtube-transcript3.p.rapidapi.com'
      }
    });
    const data = await response.json();
    res.json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000);
module.exports = app;
