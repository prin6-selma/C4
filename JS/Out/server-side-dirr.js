const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/api/files', (req, res) => {
  const folderPath = 'Articles';
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      res.status(500).send({ error: 'Failed to read directory' });
    } else {
      res.send(files);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});