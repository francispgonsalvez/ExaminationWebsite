const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors=require("cors")
const userRoutes = require('./routes/userRouter');

const app = express();
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;
app.use(cors());

// Use user routes
app.use('/api/users', userRoutes);

mongoose
  .connect(URL)
  .then(() => {
    console.log("mongo connected successfully");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
