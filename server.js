require("dotenv").config();
import { createConnection } from "typeorm";

createConnection().then(async connection => {
  const app = require("./app");
  const PORT = process.env.NODE_PORT || 5000;

  app.listen(PORT, () => {
    console.log(`API Server is now running on PORT: ${PORT}`);
  });
});
