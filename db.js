const { Pool } = require("pg");
const env = require("./env");

const pool = new Pool(env.env.dbConfig);

function getConnection() {
    return pool;
}

module.exports.getConnection = getConnection ;