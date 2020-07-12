const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
require("dotenv").config();
require("./config/database").connect()
const bodyValidator = require("./util/body_validator")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Controllers
const healthController = require("./controllers/health.controller")
const userController = require("./controllers/user.controller")
const signController = require("./controllers/sign.controller")

//HTTP Methods
app.get("/health", healthController.health)
app.post("/user", userController.validate("body"), bodyValidator, userController.create)
app.post("/signin", signController.validate("body"), bodyValidator, signController.signIn)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});