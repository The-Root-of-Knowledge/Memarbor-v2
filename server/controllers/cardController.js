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
      return next(err);
    });
};

cardController.createSet = (req, res, next) => {
    //user sends a name for the set
    const setName = [req.body.name];
    //take name from request body and use that to create new set
    const queryString = `INSERT INTO sets (setname, private) VALUES ($1, '0');`
    //Will need to pass setname and private = 0 to db
    db.query(queryString, setName)
    .then((data) => {
    res.locals.newSet = data;
    console.log(res.locals.newSet)
    return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
    
};

cardController.createCard = (req, res, next) => {};

module.exports = cardController;
