const express = require("express");
const cors = require("cors");
require("dotenv").config();

const confessionRouter = require("./routes/confessionRouter");
const adminRouter = require("./routes/adminRouter");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/confessions", confessionRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});