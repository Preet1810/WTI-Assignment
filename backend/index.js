require('dotenv').config();
const express=require("express");
const bodyParser=require('body-parser');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

require("./startup/index.startup")(app);
