const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config();
require("./config/database").connect()
const auth = require("./util/auth")
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

app.post("/user", auth, userController.validate("create"), bodyValidator, userController.create)
app.get("/user/:userId", auth, userController.getById)
app.patch("/user/:userId", auth, userController.validate("update"), bodyValidator, userController.update)
app.delete("/user/:userId", auth, userController.delete)
app.get("/users", auth, userController.getAll)

app.post("/signin", signController.validate("body"), bodyValidator, signController.signIn)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});