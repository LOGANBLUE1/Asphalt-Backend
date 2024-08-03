const mongoose = require("mongoose");
require("dotenv").config();

let CLUSTER_URL = process.env.CLUSTER_URL;

mongoose.connect(CLUSTER_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
    console.error(err);
    });
