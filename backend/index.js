const express = require("express");
const router = require("./routes/route.js");
const cors = require("cors");
const DBConnection = require("./database/db.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

DBConnection();

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
