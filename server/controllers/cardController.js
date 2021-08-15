const db = require("../cardModel.js");
//console.log("db", db);

const cardController = {};

cardController.getSet = (req, res, next) => {
  const setId = [req.body._id];
  //console.log(setId, "Should be 1");
  const queryString = `SELECT s.*, c.* FROM sets s LEFT OUTER JOIN cards c ON c.set_id = $1;`;
  db.query(queryString, setId)
    .then((data) => {
      res.locals.set = data.rows;
      //console.log(res.locals.set, "Should be the object we want");
      return next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

cardController.createSet = (req, res, next) => {
  
};

cardController.createCard = (req, res, next) => {};

module.exports = cardController;
