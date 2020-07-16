const express = require('express');
const os = require('os');

const networkInterfaces = os.networkInterfaces();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(networkInterfaces);
  const localIp = networkInterfaces.eth0[0].address;
  res.send(`Hello World from ${localIp}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
