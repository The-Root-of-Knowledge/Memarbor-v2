const express = require("express");

const cardController = require("../controllers/cardController");

const router = express.Router();

//route to get a set of cards
router.get("/getSet", cardController.getSet, (req, res) =>
  res.status(200).send(res.locals.set)
);

//route to create new set
router.post("/createSet", cardController.createSet, (req, res) =>
  res.status(200).send(res.locals.newSet)
);

//route to create new card
router.post("/createCard", cardController.createCard, (req, res) =>
  res.status(200).send(res.locals.newCard)
);

//getSet request needs to happen after client switches from card creation mode to practice mode
