const express = require("express");

const cardController = require("../controllers/cardController.js");

const router = express.Router();

//route to get a set of cards
router.get(
  "/getSet",
  // () => console.log("In the router dot get"),
  cardController.getSet,
  (req, res) => res.status(200).send(res.locals.set)
);

// route to create new set
router.post("/createSet", cardController.createSet, cardController.getSetByName, (req, res) =>
  res.status(200).send(res.locals.setId[0])  //returns object with key _id and value is id # of the newly created set
);

//route to create new card
router.post("/createCard", cardController.createCard, (req, res) =>
  res.status(200).send('Card Created')
);

//route to get all sets
router.get("/getAllSets", cardController.getAllSets, (req, res) =>
  res.status(200).send(res.locals.allSets)
);


//getSet request needs to happen after client switches from card creation mode to practice mode

module.exports = router;
