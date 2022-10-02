const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = 3000;

mongoose.connect("mongodb+srv://root:rIz9ypYZwm7s9hfO@cluster0.zsefwy4.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database!");
}).catch((err) => { 
  console.log("Connection failed!", err);
})


const api = require('./api/routes/index');
app.use(express.json());
app.use('/api', api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

