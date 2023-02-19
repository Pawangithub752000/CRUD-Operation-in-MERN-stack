const express = require("express");
require("./database/conn");
const router = require("./routers/route");


const UserDetails = require("./models/user")

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`); 

})





