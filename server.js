const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.stack("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ default: "main "}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
    consoler.log("Server listening on://localhost:" + PORT);
})
