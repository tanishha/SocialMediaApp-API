const dotenv = require("dotenv")
dotenv.config();

const dbconxnUrl = process.env.DATABASE_URL;

module.exports = {
    dbconxnUrl
}