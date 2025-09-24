const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 3000, () =>{
    console.log(`Server is running on port https://localhost:${process.env.PORT || 3000}`);
})