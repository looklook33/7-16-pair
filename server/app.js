const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

app.use((req, res, next) => {
  let myError = new Error('Sorry, the requested resource could not be found');
  myError.statusCode = 404
  next(myError)
});

app.use((err, req, res, next) => {
 //console.log(err.message)
 res.json({
  message:err.message,
  statusCode:err.statusCode
 })
// res.send(err.message)
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
