const path = require("path");
const express = require("express");
const app = express();

//list of routers
const cardRouters = require("./routes/cardRouters.js");
const authRouters = require("./routes/authRouters.js");

const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/build", express.static(path.join(__dirname, "../build/")));

//console.log("Before get slash");

// app.get("/", authController.setCookie, (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
// });

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});



//route all card requests to the card router
app.use("/cards", cardRouters);

//route all authentication requests to the authentication router
app.use("/auth", authRouters);

//catch all route handler, handles request to an unknown route
app.use((req, res) => res.status(404).send("this does not exist"));

//gloabal error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Global error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error was passed into the global error handler" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(err);
  return res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
