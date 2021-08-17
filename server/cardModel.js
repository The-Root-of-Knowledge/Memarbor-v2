const { Pool } = require("pg");

const PGURI =
  "postgres://qbcgrnmp:7eLZI0w8cwiAvGG9_qzoTTD0YSRp7_2D@chunee.db.elephantsql.com/qbcgrnmp";
const pool = new Pool({
  connectionString: PGURI,
});

//brandon seperate db for testing
// const PGURI =
//   "postgres://xbredhlw:LCNZxbK_ladIpYOfYcxMSVOLe5Dpqo4z@chunee.db.elephantsql.com/xbredhlw";
// const pool = new Pool({
//   connectionString: PGURI,
// });

const db = {
  query: (text, params, callback) => {
    //console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
module.exports = db;
