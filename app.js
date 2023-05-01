const express = require("express");
var cors = require("cors");
const app = express();
const PORT = 3005;
const routes = require("./routes/routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

var options = {
  explorer: true,
};

app.use(express.json());

app.use(cors());

app.use(
  "/translator-api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, options)
);

app.use("/api/v1", routes);

app.listen(PORT, () => console.log(`App is live on http://localhost:${PORT}`));