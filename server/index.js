require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');




connection();

app.use(express.json({limit:"100mb"}));
app.use(cors({
    origin : "http://localhost:3000",
    credentials: true // Allow cookies to be sent in cross-origin requests
  }));
  
  app.use(bodyParser.json());
app.use(cookieParser());



const products = require('./Routes/FruitsRoutes');
const user = require('./Routes/UserRoutes');
const cartRoutes = require('./Routes/cartRoutes');


app.use('/api',products);
app.use('/api',user);
app.use('/api', cartRoutes);

// app.use('/api',user);





const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));