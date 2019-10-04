require("dotenv").config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require('./config/db.js');

const app = express();

const userRouter = require('./app/routes/user')

const PORT = process.env.PORT || 4000

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });
  
app.get("/", function(req, res) {
    res.send("goodbye cruel woorl");
});
app.use("/", userRouter)

app.listen(PORT, () => console.log(`server running, catch it if you can http://localhost:${PORT}`))

