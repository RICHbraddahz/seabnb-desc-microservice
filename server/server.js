const express = require('express');
const cors = require('cors');
const getRenderedComponent = require('./renderComponent');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  let html = await getRenderedComponent(id, mongoClient, redisClient);

  res.send(html);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});