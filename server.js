require("dotenv").config();
import { createConnection } from "typeorm";
// import createDate from "./examples/createData";
// import queryingData from "./examples/queryingData";
import "@babel/polyfill";

createConnection().then(async connection => {
  const app = require("./app");
  const PORT = process.env.NODE_PORT || 5000;

  // Create Some data
  // await createDate(connection)

  // Query some data
  // await queryingData()

  app.listen(PORT, () => {
    console.log(`API Server is now running on PORT: ${PORT}`);
  });
});
