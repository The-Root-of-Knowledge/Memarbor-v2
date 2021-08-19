const express = require("express");

const cardController = require("../controllers/cardController.js");

const router = express.Router();

//route to get a set of cards
router.post(
  "/getSet",
  // () => console.log("In the router dot get"),
  cardController.getSet,
  (req, res) => res.status(200).send(res.locals.set) //array of objects, each is a card
);

// route to delete a set of cards
router.post(
  "/deleteSet",
  // () => console.log("In the router dot get"),
  cardController.deleteSet,
  (req, res) => res.status(200).send(res.locals.set) //array of objects, each is a card
);

// route to create new set
router.post(
  "/createSet",
  cardController.createSet,
  cardController.getSetByName,
  (req, res) => res.status(200).send(res.locals.setId[0]) //returns object with key _id and value is id # of the newly created set
);

//route to create new card
router.post("/createCard", cardController.createCard, (req, res) =>
  res.status(200).send("Card Created")
);

//route to get all sets
router.get(
  "/getAllSets",
  cardController.getAllSets,
  (req, res) => res.status(200).send(res.locals.allSets) //array of set objects
);

//route to get all private sets
router.get(
  "/getAllPrivateSets",
  cardController.getAllPrivateSets,
  (req, res) => res.status(200).send(res.locals.allPrivateSets) //array of set objects
);

//getSet request needs to happen after client switches from card creation mode to practice mode

module.exports = router;
