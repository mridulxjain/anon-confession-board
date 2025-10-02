const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const confessionRouter = require("./src/routes/confessionRouter");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/confessions", confessionRouter);

const PORT = process.env.PORT || 8080;  

app.get("/", (req, res) => {
  res.send("🚀 Whizper backend is running on Railway!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});