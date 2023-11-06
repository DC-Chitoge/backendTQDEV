// const express = require('express')
import express from "express";
const app = express();

const hostname = "localhost";
const port = 8017;

app.get("/", function (req, res) {
  res.send("Hello World check treno api");
});

app.listen(port, hostname, () => {
  console.log(`toi dang o tai dia chi ${hostname} ${port}`);
});
