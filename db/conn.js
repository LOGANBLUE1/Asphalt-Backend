const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jagmohan:UO7Aqp1bEafm2sT9@cluster0.uqqnml2.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
    console.error(err);
    });
