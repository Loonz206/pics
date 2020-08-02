const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  accessKey: process.env.REACT_APP_ACCESS_KEY,
  secretKey: process.env.REACT_APP_SECRET_KEY,
};
