const express = require("express");
const app = express(); 
const PORT = process.env.PORT || 5000;
const cookieparser = require("cookie-parser");
const cors = require("cors");
// require('./db/conn');

require("dotenv").config();

app.use(cookieparser());
app.use(express.json());
app.use(cors());

// it will work for route's authentication
app.get('/',(req, res) => {
    return res.json({"Message" : "This is Home Page from Backend"});
})
app.use(require('./router/userRoutes'));
app.use(require('./router/appointmentRoutes'));


// for connecting to port number PORT

app.listen(PORT, () => {
    console.log(`Server is Running at PORT ${PORT}`);
});

