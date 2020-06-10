const express = require('express')
const app = express();
const port = 3000;
 
app.get('/', function (req, res) {
  res.send('Welcome to travis-ci-coverall demo')
})
 
app.listen(port, () => console.log(`travis-ci-coverall app listening at port: ${port});
