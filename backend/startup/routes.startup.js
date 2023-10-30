const express=require("express");
const morgan=require("morgan");

const cors=require("cors");
const { clientRoutes }=require("../routes/clientRoutes");

module.exports=(app) => {

  app.use(cors());
  app.use(morgan("tiny")); // initiating console api requests

  //   starts of Routes
  app.use("/api/client", clientRoutes);

  app.get("/", (req, res) => res.send("Welcome To Mern Assignment"));
  app.get("*", (req, res) => { res.status(400).send({ error: true, message: "Route not Found" }) });

}